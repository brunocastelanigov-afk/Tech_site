<?php
/**
 * QueirozTech — Template Principal
 *
 * Renderiza o ponto de montagem do React (<div id="root">).
 * Todo o layout, navegação e conteúdo é controlado pela SPA React/Vite.
 *
 * @package QueirozTech
 * @version 1.0.0
 */

defined('ABSPATH') || exit;
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
        content="QueirozTech - Mais de 20 anos melhorando o mercado de tecnologia. Soluções em TI, infraestrutura e consultoria." />
    <link rel="icon" type="image/png"
        href="<?php echo esc_url(get_template_directory_uri() . '/assets/imgs/queiroztech_logo_preto_letrapreta.png'); ?>" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div id="root"></div>

    <?php wp_footer(); ?>
</body>

</html>