#!/bin/bash
# ==============================================================================
# QueirozTech — WordPress Theme Build & Package Script
# ==============================================================================
#
# Uso:    ./build-wp.sh
# Output: wp-theme/queiroztech.zip (pronto para upload no WP Admin)
#
# Este script:
# 1. Roda o build do Vite com perfil WordPress
# 2. Copia as imagens estáticas para o tema
# 3. Gera um .zip pronto para upload no WP Admin
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

THEME_DIR="wp-theme/queiroztech"
ASSETS_DIR="$THEME_DIR/assets"

echo "🔨 [1/4] Rodando build do Vite (perfil WordPress)..."
WP_BUILD=true npx vite build

echo ""
echo "📦 [2/4] Copiando imagens estáticas..."
# Copiar imagens do public/imgs/ para o tema
if [ -d "public/imgs" ]; then
    mkdir -p "$ASSETS_DIR/imgs"
    cp -r public/imgs/* "$ASSETS_DIR/imgs/"
    echo "   → $(ls public/imgs | wc -l | tr -d ' ') imagens copiadas"
fi

# Copiar imagens soltas do public/
for img in public/*.png public/*.jpg public/*.svg; do
    [ -f "$img" ] && cp "$img" "$ASSETS_DIR/"
done
echo "   → Assets raiz copiados"

echo ""
echo "📋 [3/4] Verificando estrutura do tema..."
echo "   Arquivos do tema:"
echo "   ├── style.css        $([ -f "$THEME_DIR/style.css" ] && echo '✅' || echo '❌')"
echo "   ├── index.php        $([ -f "$THEME_DIR/index.php" ] && echo '✅' || echo '❌')"
echo "   ├── functions.php    $([ -f "$THEME_DIR/functions.php" ] && echo '✅' || echo '❌')"
echo "   ├── screenshot.png   $([ -f "$THEME_DIR/screenshot.png" ] && echo '✅ (opcional)' || echo '⚠️  ausente (opcional)')"
echo "   └── assets/"
echo "       ├── .vite/manifest.json $([ -f "$ASSETS_DIR/.vite/manifest.json" ] && echo '✅' || echo '❌')"
echo "       ├── *.js          $(ls "$ASSETS_DIR"/*.js 2>/dev/null | wc -l | tr -d ' ') arquivo(s)"
echo "       ├── *.css         $(ls "$ASSETS_DIR"/*.css 2>/dev/null | wc -l | tr -d ' ') arquivo(s)"
echo "       └── imgs/         $(ls "$ASSETS_DIR/imgs" 2>/dev/null | wc -l | tr -d ' ') arquivo(s)"

echo ""
echo "🗜️  [4/4] Gerando ZIP do tema..."
cd wp-theme
zip -r queiroztech.zip queiroztech/ -x "*.DS_Store"
cd ..

ZIP_SIZE=$(du -h "wp-theme/queiroztech.zip" | cut -f1)
echo ""
echo "=============================================="
echo "✅ Tema WordPress gerado com sucesso!"
echo "=============================================="
echo ""
echo "📁 Arquivo: wp-theme/queiroztech.zip ($ZIP_SIZE)"
echo ""
echo "📝 Deploy:"
echo "   1. Acesse https://queiroztech.com/wp-admin"
echo "   2. Vá em Aparência → Temas → Adicionar Novo"
echo "   3. Clique em 'Enviar Tema'"
echo "   4. Selecione wp-theme/queiroztech.zip"
echo "   5. Instale e Ative o tema"
echo ""
echo "⚠️  Se a rota /contato retornar 404:"
echo "   → Veja wp-theme/queiroztech/.htaccess-rules.txt"
echo "=============================================="
