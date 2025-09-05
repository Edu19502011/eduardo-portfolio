@echo off
title Eduardo's Portfolio Server

echo 🚀 Iniciando o portfólio do Eduardo...

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python não encontrado. Por favor, instale Python para continuar.
    pause
    exit /b 1
)

REM Find an available port starting from 8000
set PORT=8000
:checkport
netstat -an | find ":%PORT% " >nul 2>&1
if %errorlevel% eql 0 (
    set /a PORT=%PORT%+1
    goto checkport
)

echo 📁 Navegando para o diretório do projeto...
cd /d "%~dp0"

echo 🌐 Iniciando servidor web na porta %PORT%...
echo 📱 Acesse seu portfólio em: http://localhost:%PORT%
echo ⚡ Pressione Ctrl+C para parar o servidor
echo.

REM Start the Python HTTP server
python -m http.server %PORT%

echo 🛑 Servidor parado.
pause