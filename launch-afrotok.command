#!/bin/bash
set -e
cd "$(dirname "$0")"

PSEUDO="toa.afrotok"

echo "▶ git pull..."
git pull --quiet || echo "(pull ignoré)"

# Tue un éventuel bridge déjà lancé
pkill -f "tiktok-bridge.js" 2>/dev/null || true
sleep 1

echo "▶ Démarrage du bridge pour @$PSEUDO dans une nouvelle fenêtre Terminal..."
osascript <<OSA
tell application "Terminal"
    do script "cd ~/Documents/quizz && node tiktok-bridge.js $PSEUDO"
    activate
end tell
OSA

echo "▶ Attente du serveur HTTP sur :8000..."
for i in {1..30}; do
    if curl -s -o /dev/null http://127.0.0.1:8000/; then
        echo "✅ Quiz en ligne"
        break
    fi
    sleep 0.5
done

# Ferme d'éventuelles fenêtres Chrome déjà ouvertes sur l'URL du quiz
echo "▶ Ouverture de Chrome en mode app 1080x1920..."
open -na "Google Chrome" --args \
    --app=http://127.0.0.1:8000 \
    --window-size=1080,1920 \
    --window-position=0,0

echo ""
echo "✅ Tout est prêt."
echo "   Dans TikTok Live Studio : ajoute une source 'Capture de fenêtre'"
echo "   et sélectionne la fenêtre Chrome 'Afrotok Quiz'."
echo "   Pour arrêter : Ctrl+C dans la fenêtre Terminal du bridge."
