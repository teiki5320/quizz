/*
  AFROTOK QUIZ — TikTok Live Bridge  (Mac / Linux / Windows)
  ==========================================================

  Petit serveur tout-en-un :
    1. Sert index.html + questions.js en HTTP local (port 8000)
    2. Se connecte à ton TikTok Live
    3. Retransmet chaque message du chat en WebSocket (port 8080)
       Format : { "user": "pseudo_viewer", "message": "texte du chat" }

  Ce script ne compte pas les votes. Toute la logique (dédoublonnage,
  timing, bonne réponse) est gérée par index.html côté navigateur.

  ---------- INSTALLATION (une seule fois) ----------

      cd /chemin/vers/quizz
      npm install

  ---------- UTILISATION ----------

      node tiktok-bridge.js <pseudo_tiktok>

      # exemple :
      node tiktok-bridge.js afrotok_live

  ---------- DANS TIKTOK LIVE STUDIO (Mac) ----------

      Source navigateur  →  http://127.0.0.1:8000
      Taille             →  1080 × 1920

  Notes :
    - ne pas mettre le @ devant le pseudo
    - le compte doit être EN LIVE au moment où tu lances le script
    - Ctrl+C pour arrêter proprement
*/

const http           = require('http');
const fs             = require('fs');
const path           = require('path');
const { WebcastPushConnection } = require('tiktok-live-connector');
const { WebSocketServer }       = require('ws');

// ---------- ARGUMENTS ----------
const username = process.argv[2];
if (!username) {
  console.error('');
  console.error('❌  Usage : node tiktok-bridge.js <pseudo_tiktok>');
  console.error('   Exemple : node tiktok-bridge.js afrotok_live');
  console.error('');
  console.error('   (ne pas mettre le @, le compte doit être EN LIVE)');
  console.error('');
  process.exit(1);
}

const HTTP_PORT = 8000;
const WS_PORT   = 8080;

// ---------- SERVEUR HTTP (sert index.html + questions.js) ----------
const SERVE_DIR = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon'
};

const httpServer = http.createServer(function (req, res) {
  let urlPath = (req.url || '/').split('?')[0];
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const filePath = path.normalize(path.join(SERVE_DIR, decodeURIComponent(urlPath)));
  if (!filePath.startsWith(SERVE_DIR)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, function (err, data) {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    res.end(data);
  });
});

httpServer.listen(HTTP_PORT, function () {
  console.log(`[HTTP] Quiz servi sur http://127.0.0.1:${HTTP_PORT}/`);
  console.log(`       → dans TikTok Live Studio, source navigateur = cette URL`);
});

// ---------- SERVEUR WEBSOCKET ----------
const wss = new WebSocketServer({ port: WS_PORT });
const clients = new Set();

wss.on('connection', function (socket) {
  clients.add(socket);
  console.log(`[WS]   Client connecté (total : ${clients.size})`);
  socket.on('close', function () {
    clients.delete(socket);
    console.log(`[WS]   Client déconnecté (total : ${clients.size})`);
  });
  socket.on('error', function () { /* ignore */ });
});

function broadcast(payload) {
  const json = JSON.stringify(payload);
  for (const client of clients) {
    try {
      if (client.readyState === 1) client.send(json);
    } catch (e) { /* ignore */ }
  }
}

console.log(`[WS]   Serveur WebSocket prêt sur ws://127.0.0.1:${WS_PORT}`);

// ---------- CONNEXION TIKTOK ----------
console.log(`[TikTok] Connexion au live de @${username}...`);

const tiktok = new WebcastPushConnection(username);

tiktok.connect()
  .then(function (state) {
    console.log(`[TikTok] ✅ Connecté au live de @${username}`);
    if (state && state.roomId) console.log(`         roomId = ${state.roomId}`);
  })
  .catch(function (err) {
    console.error(`[TikTok] ❌ Échec de connexion : ${err.message || err}`);
    console.error(`         Vérifie que @${username} est bien EN LIVE maintenant.`);
  });

tiktok.on('chat', function (data) {
  const user    = data.uniqueId || data.nickname || 'anon';
  const message = String(data.comment || '').trim();
  if (!message) return;
  console.log(`[Chat] ${user} : ${message}`);
  broadcast({ user: user, message: message });
});

tiktok.on('disconnected', function () {
  console.log('[TikTok] Déconnecté du live. Relance le script pour reconnecter.');
});

tiktok.on('error', function (err) {
  console.error(`[TikTok] Erreur : ${err && err.message ? err.message : err}`);
});

// ---------- ARRÊT PROPRE ----------
process.on('SIGINT', function () {
  console.log('\n[Bridge] Arrêt demandé, fermeture...');
  try { tiktok.disconnect(); } catch (e) {}
  try { wss.close();         } catch (e) {}
  try { httpServer.close();  } catch (e) {}
  process.exit(0);
});
