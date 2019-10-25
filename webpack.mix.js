let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Custom Mix setup
 |--------------------------------------------------------------------------
 |
 */

mix
    .setPublicPath('public')
    .js('resources/assets/js/survey-manager.js', 'public/js/')
    .js('resources/assets/js/survey-front.js', 'public/js/');

mix
    .copy('node_modules/survey-vue/survey.css', 'public/css/');
