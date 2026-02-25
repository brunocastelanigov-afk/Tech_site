<?php
/**
 * QueirozTech Theme Functions
 *
 * Carrega a SPA React/Vite embutida como tema WordPress.
 * Os assets são gerados pelo `npm run build:wp` e incluem um manifest.json
 * com os nomes hasheados dos bundles JS/CSS.
 *
 * @package QueirozTech
 * @version 1.0.0
 */

defined('ABSPATH') || exit;

// =============================================================================
// Constantes do tema
// =============================================================================
define('QT_THEME_DIR', get_template_directory());
define('QT_THEME_URI', get_template_directory_uri());
define('QT_ASSETS_URI', QT_THEME_URI . '/assets');
define('QT_ASSETS_DIR', QT_THEME_DIR . '/assets');
define('QT_VERSION', '1.0.0');

// =============================================================================
// Suporte do tema
// =============================================================================
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', ['search-form', 'comment-form', 'gallery', 'caption']);
});

// =============================================================================
// Carregar assets do React (via manifest.json do Vite)
// =============================================================================
add_action('wp_enqueue_scripts', function () {
    // Ler manifest.json gerado pelo Vite
    $manifest_path = QT_ASSETS_DIR . '/.vite/manifest.json';

    if (!file_exists($manifest_path)) {
        // Fallback: sem manifest, tenta carregar diretamente
        wp_enqueue_style('queiroztech-style', get_stylesheet_uri(), [], QT_VERSION);
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);

    if (empty($manifest)) {
        return;
    }

    // O entry point é o index.html que referencia src/main.jsx
    $entry = $manifest['index.html'] ?? null;

    if (!$entry) {
        return;
    }

    // Enfileirar o CSS principal
    if (!empty($entry['css'])) {
        foreach ($entry['css'] as $index => $css_file) {
            wp_enqueue_style(
                'queiroztech-react-css-' . $index,
                QT_ASSETS_URI . '/' . $css_file,
                [],
                QT_VERSION
            );
        }
    }

    // Enfileirar o JS principal (módulo ES)
    wp_enqueue_script(
        'queiroztech-react-js',
        QT_ASSETS_URI . '/' . $entry['file'],
        [],
        QT_VERSION,
        true
    );

    // Marcar como type="module" (necessário para Vite)
    add_filter('script_loader_tag', function ($tag, $handle) {
        if ($handle === 'queiroztech-react-js') {
            $tag = str_replace('<script ', '<script type="module" crossorigin ', $tag);
        }
        return $tag;
    }, 10, 2);
});

// =============================================================================
// Limpar head do WordPress (remover bloat)
// =============================================================================
add_action('init', function () {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');

    // Remove REST API link
    remove_action('wp_head', 'rest_output_link_wp_head');

    // Remove oEmbed links
    remove_action('wp_head', 'wp_oembed_add_discovery_links');

    // Remove RSD/XML-RPC
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');

    // Remove WordPress generator tag
    remove_action('wp_head', 'wp_generator');

    // Remove shortlink
    remove_action('wp_head', 'wp_shortlink_wp_head');

    // Remove feed links
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
});

// Desabilitar Gutenberg block styles no front
add_action('wp_enqueue_scripts', function () {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
}, 100);

// Desabilitar jQuery no front (React não precisa)
add_action('wp_enqueue_scripts', function () {
    if (!is_admin()) {
        wp_deregister_script('jquery');
    }
}, 100);

// =============================================================================
// SPA Routing: Redirecionar todas as rotas para o index.php do tema
// (Backup PHP caso .htaccess não funcione)
// =============================================================================
add_action('template_redirect', function () {
    // Se não é admin e não é um arquivo real, deixa o React Router lidar
    if (!is_admin() && !is_feed()) {
        global $wp_query;
        // Marcar como 200 (não 404) para qualquer rota
        status_header(200);
    }
});
