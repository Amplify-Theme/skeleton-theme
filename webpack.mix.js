const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sourceMaps(false, 'source-map')
    .copyDirectory('assets/images', 'public/images')
    .copyDirectory('assets/vendor/ckeditor', 'public/js/ckeditor')
    .copyDirectory('assets/vendor/css/minicolor', 'public/css/minicolor')
    .copyDirectory('assets/fonts', 'public/fonts')
    .copy('assets/vendor/js/modernizr.min.js', 'public/js/modernizr.min.js')
    .copy('assets/css/custom.css', 'public/css/custom.css')
    .copy('assets/js/custom.js', 'public/js/custom.js')
    .copy('assets/vendor/js/jquery.minicolors.min.js', 'public/js/minicolors.js')
    .minify('assets/js/scripts.js', 'public/js/scripts.min.js')
    .combine([
        'assets/vendor/js/jquery.min.js',
        'assets/vendor/js/popper.min.js',
        'assets/vendor/js/photoswipe.min.js',
        'assets/vendor/js/bootstrap.min.js',
        'assets/vendor/js/downCount.min.js',
        'assets/vendor/js/gmap3.min.js',
        'assets/vendor/js/imagesloaded.pkgd.min.js',
        'assets/vendor/js/isotope.pkgd.min.js',
        'assets/vendor/js/iziToast.min.js',
        'assets/vendor/js/nouislider.min.js',
        'assets/vendor/js/numscroller.min.js',
        'assets/vendor/js/owl.carousel.min.js',
        'assets/vendor/js/photoswipe-ui-default.min.js',
        'assets/vendor/js/velocity.min.js',
        'assets/vendor/js/jquery.validate.min.js',
        'assets/vendor/js/select2.min.js',
        'assets/vendor/js/moment.min.js',
        'assets/vendor/js/daterangepicker.min.js',
        'assets/vendor/datatable/datatables.min.js',
    ], 'public/js/vendor.min.js')
    .sass('assets/scss/styles.scss', 'public/css/styles.css')
    .minify('public/css/styles.css', 'public/css/styles.min.css')
    .combine([
        'assets/vendor/css/select2.min.css',
        'assets/vendor/css/bootstrap.min.css',
        'assets/vendor/css/feather.min.css',
        'assets/vendor/css/iziToast.min.css',
        'assets/vendor/css/pe-icon-7-stroke.min.css',
        'assets/vendor/css/photoswipe.min.css',
        'assets/vendor/css/socicon.min.css',
        'assets/vendor/css/daterangepicker.css',
        'assets/vendor/datatable/datatables.min.css',
    ], 'public/css/vendor.min.css');
