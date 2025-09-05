#!/bin/bash

# Eduardo's Portfolio - Start Script
echo "🚀 Iniciando o portfólio do Eduardo..."

# Check if Python is available
if command -v python3 &> /dev/null; then
    PYTHON_CMD=python3
elif command -v python &> /dev/null; then
    PYTHON_CMD=python
else
    echo "❌ Python não encontrado. Por favor, instale Python para continuar."
    exit 1
fi

# Check if we're on Windows (Git Bash or WSL)
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows - try to find an available port
    PORT=8000
    while netstat -an | grep ":$PORT " > /dev/null 2>&1; do
        PORT=$((PORT + 1))
    done
else
    # Unix-like systems
    PORT=8000
    while lsof -Pi :$PORT -sTCP:LISTEN -t > /dev/null 2>&1; do
        PORT=$((PORT + 1))
    done
fi

echo "📁 Navegando para o diretório do projeto..."
cd "$(dirname "$0")"

echo "🌐 Iniciando servidor web na porta $PORT..."
echo "📱 Acesse seu portfólio em: http://localhost:$PORT"
echo "⚡ Pressione Ctrl+C para parar o servidor"
echo ""

# Start the Python HTTP server
$PYTHON_CMD -m http.server $PORT

echo "🛑 Servidor parado."