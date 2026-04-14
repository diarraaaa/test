@echo off
echo 🔍 Validation locale pour Senoris Main...

echo ├─ Verification TypeScript...
call npx tsc --noEmit
if %errorlevel% neq 0 (
    echo ❌ Erreur TypeScript. Corrigez avant de deployer.
    pause
    exit /b %errorlevel%
)

echo ├─ Test du Build...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Échec du build.
    pause
    exit /b %errorlevel%
)

echo ✅ Validation reussie!

echo 🚀 Envoi sur GitHub...
git add .
git commit -m "feat: add cv link and deployment script"
git push origin main

echo 🌐 Deploiement sur le VPS...
ssh root@31.97.156.139 "cd /var/www/senoris-main && git pull origin main && npm install && npm run build && pm2 restart senoris-main || pm2 start npm --name 'senoris-main' -- start"

echo 🏁 Deploiement termine!
pause
