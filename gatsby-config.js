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
        }
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    "gatsby-transformer-remark"
  ],
  siteMetadata: {
    languages
  }
};
