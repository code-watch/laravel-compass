const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
    .options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true,
                }
            }
        },
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')]
    })
    .setPublicPath('public')
    .js('resources/js/app.js', 'public')
    .sass('resources/sass/app.scss', 'public')
    .extract()
    .version()
    .copy('public', '../compasstest/public/vendor/compass');
