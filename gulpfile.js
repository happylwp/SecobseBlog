const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass(['app.scss', 'content.scss', 'offer.scss'])
        .sass('welcome.scss', 'public/css')
        .sass('home.scss', 'public/css')
        .copy('node_modules/font-awesome/fonts', 'public/fonts')
        .copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/fonts/bootstrap')
        .copy('node_modules/simplemde/dist/simplemde.min.css', 'public/css/simplemde.min.css')
        .copy('node_modules/simplemde/dist/simplemde.min.js', 'public/js/simplemde.min.js')
        .copy('node_modules/select2/dist/js/select2.min.js', 'public/js/select2.min.js')
        .copy('node_modules/select2/dist/css/select2.min.css', 'public/css/select2.min.css')
        .copy('node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css', 'public/css/select2-bootstrap.min.css')
        .webpack('slide.js', 'public/js')
        .webpack('tag.js', 'public/js')
        .webpack('app.js');
})
;
