#!/bin/bash

# ShimmerJS Setup Script
echo "🚀 Configurando ShimmerJS..."

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Criar pasta dist se não existir
echo "📁 Criando pasta dist..."
mkdir -p dist

# Build inicial
echo "🔨 Fazendo build inicial..."
npm run build

echo "✅ ShimmerJS configurado com sucesso!"
echo ""
echo "📋 Próximos passos:"
echo "1. Teste o build: npm run build:dev"
echo "2. Para desenvolvimento: npm run watch"
echo "3. Para publicar: npm publish"
echo ""
echo "📖 Documentação: README.md" 