const languages = require('./src/data/languages');

module.exports = {
    plugins: [
        {
            options: {
                langKeyDefault: languages.defaultLangKey,
                langKeyForNull: 'en',
                useLangKeyLayout: false,
            },
            resolve: 'gatsby-plugin-i18n',
        },
        {
            options: {
                background_color: '#f0f0f0',
                display: 'minimal-ui',
                icons: [
                    {
                        sizes: '36x36',
                        src: '/favicons/android-chrome-36x36.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '48x48',
                        src: '/favicons/android-chrome-48x48.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '72x72',
                        src: '/favicons/android-chrome-72x72.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '96x96',
                        src: '/favicons/android-chrome-96x96.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '144x144',
                        src: '/favicons/android-chrome-144x144.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '192x192',
                        src: '/favicons/android-chrome-192x192.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '256x256',
                        src: '/favicons/android-chrome-256x256.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '384x384',
                        src: '/favicons/android-chrome-384x384.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '512x512',
                        src: '/favicons/android-chrome-512x512.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '180x180',
                        src: '/favicons/apple-touch-icon.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '57x57',
                        src: '/favicons/apple-touch-icon-57x57.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '57x57',
                        src: '/favicons/apple-touch-icon-57x57-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '60x60',
                        src: '/favicons/apple-touch-icon-60x60.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '60x60',
                        src: '/favicons/apple-touch-icon-60x60-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '72x72',
                        src: '/favicons/apple-touch-icon-72x72.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '72x72',
                        src: '/favicons/apple-touch-icon-72x72-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '76x76',
                        src: '/favicons/apple-touch-icon-76x76.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '76x76',
                        src: '/favicons/apple-touch-icon-76x76-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '114x114',
                        src: '/favicons/apple-touch-icon-114x114.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '114x114',
                        src: '/favicons/apple-touch-icon-114x114-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '120x120',
                        src: '/favicons/apple-touch-icon-120x120.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '120x120',
                        src: '/favicons/apple-touch-icon-120x120-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '144x144',
                        src: '/favicons/apple-touch-icon-144x144.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '144x144',
                        src: '/favicons/apple-touch-icon-144x144-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '152x152',
                        src: '/favicons/apple-touch-icon-152x152.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '152x152',
                        src: '/favicons/apple-touch-icon-152x152-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '180x180',
                        src: '/favicons/apple-touch-icon-180x180.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '180x180',
                        src: '/favicons/apple-touch-icon-180x180-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '180x180',
                        src: '/favicons/apple-touch-icon-precomposed.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '48x48',
                        src: '/favicons/favicon.ico',
                        type: 'image/x-icon',
                    },
                    {
                        sizes: '16x16',
                        src: '/favicons/favicon-16x16.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '32x32',
                        src: '/favicons/favicon-32x32.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '194x194',
                        src: '/favicons/favicon-194x194.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '70x70',
                        src: '/favicons/mstile-70x70.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '144x144',
                        src: '/favicons/mstile-144x144.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '150x150',
                        src: '/favicons/mstile-150x150.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '310x150',
                        src: '/favicons/mstile-310x150.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '310x310',
                        src: '/favicons/mstile-310x310.png',
                        type: 'image/png',
                    },
                    {
                        sizes: '3467x3467',
                        src: '/favicons/safari-pinned-tab.svg',
                        type: 'image/svg+xml',
                    },
                ],
                name: 'Caddy smells like trees',
                short_name: 'Caddy',
                start_url: '/',
                theme_color: '#f0f0f0',
            },
            resolve: 'gatsby-plugin-manifest',
        },
        'gatsby-plugin-react-helmet',
        {
            options: {
                precision: 10,
            },
            resolve: 'gatsby-plugin-sass',
        },
        'gatsby-plugin-sitemap',
        'gatsby-plugin-svgr',
        'gatsby-plugin-typescript',
        {
            options: {
                name: 'assets',
                path: `${__dirname}/src/assets`,
            },
            resolve: 'gatsby-source-filesystem',
        },
        {
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
            resolve: 'gatsby-source-filesystem',
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-offline',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
    siteMetadata: {
        dateOfEvent: '31 Dec 2018 00:00',
        languages,
        siteUrl: 'https://caddysmellsliketrees.ru',
    },
};
