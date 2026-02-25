/**
 * Resolve caminhos de assets estáticos (imagens, etc.) considerando o BASE_URL do Vite.
 *
 * No build padrão: BASE_URL = "/" → "/imgs/logo.png"
 * No build WP:     BASE_URL = "/wp-content/themes/queiroztech/assets/" → "/wp-content/themes/queiroztech/assets/imgs/logo.png"
 *
 * @param {string} path - Caminho relativo do asset, ex: "/imgs/logo.png" ou "imgs/logo.png"
 * @returns {string} Caminho completo com base URL
 */
export function assetUrl(path) {
    const base = import.meta.env.BASE_URL || '/'
    // Remove barra inicial do path se o base já termina com /
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${base}${cleanPath}`
}
