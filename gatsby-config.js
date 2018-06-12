const languages = require("./src/data/languages");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "en",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: "src/templates/LyricsTemplate.tsx",
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                      langKey
                    }
                  }
                }
              }
            }
          `
        }
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "lyrics",
        path: `${__dirname}/src/pages/lyrics`
      }
    },
    "gatsby-transformer-remark"
  ],
  siteMetadata: {
    languages
  }
};
