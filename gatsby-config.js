const languages = require("./src/data/languages");

module.exports = {
  plugins: [
    {
      options: {
        langKeyDefault: languages.defaultLangKey,
        langKeyForNull: "en",
        markdownRemark: {
          postPage: "src/templates/Template.tsx",
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                      langKey
                    }
                    frontmatter{
                      date
                      title
                      type
                    }
                  }
                }
              }
            }
          `
        },
        useLangKeyLayout: true
      },
      resolve: "gatsby-plugin-i18n"
    },
    {
      options: {
        background_color: "#f0f0f0",
        display: "minimal-ui",
        icons: [
          {
            src: "/favicons/android-chrome-36x36.png",
            sizes: "36x36",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-57x57.png",
            sizes: "57x57",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-57x57-precomposed.png",
            sizes: "57x57",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-60x60.png",
            sizes: "60x60",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-60x60-precomposed.png",
            sizes: "60x60",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-72x72-precomposed.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-76x76.png",
            sizes: "76x76",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-76x76-precomposed.png",
            sizes: "76x76",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-114x114.png",
            sizes: "114x114",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-114x114-precomposed.png",
            sizes: "114x114",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-120x120.png",
            sizes: "120x120",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-120x120-precomposed.png",
            sizes: "120x120",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-144x144-precomposed.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-152x152-precomposed.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-180x180.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-180x180-precomposed.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "/favicons/apple-touch-icon-precomposed.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "/favicons/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon"
          },
          {
            src: "/favicons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "/favicons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "/favicons/favicon-194x194.png",
            sizes: "194x194",
            type: "image/png"
          },
          {
            src: "/favicons/mstile-70x70.png",
            sizes: "70x70",
            type: "image/png"
          },
          {
            src: "/favicons/mstile-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/favicons/mstile-150x150.png",
            sizes: "150x150",
            type: "image/png"
          },
          {
            src: "/favicons/mstile-310x150.png",
            sizes: "310x150",
            type: "image/png"
          },
          {
            src: "/favicons/mstile-310x310.png",
            sizes: "310x310",
            type: "image/png"
          },
          {
            src: "/favicons/safari-pinned-tab.svg",
            sizes: "3467x3467",
            type: "image/svg+xml"
          }
        ],
        name: "Caddy smells like trees",
        short_name: "Caddy",
        start_url: "/",
        theme_color: "#f0f0f0"
      },
      resolve: "gatsby-plugin-manifest"
    },
    "gatsby-plugin-react-helmet",
    {
      options: {
        precision: 10
      },
      resolve: "gatsby-plugin-sass"
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-svgr",
    "gatsby-plugin-typescript",
    {
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      },
      resolve: "gatsby-source-filesystem"
    },
    "gatsby-transformer-remark",
    // "gatsby-plugin-offline" //order is important
  ],
  siteMetadata: {
    languages,
    siteUrl: "https://caddysmellsliketrees.ru"
  }
};
