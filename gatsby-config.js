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
    "gatsby-plugin-react-helmet",
    {
      options: {
        precision: 10
      },
      resolve: "gatsby-plugin-sass"
    },
    "gatsby-plugin-svgr",
    "gatsby-plugin-typescript",
    {
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      },
      resolve: "gatsby-source-filesystem"
    },
    "gatsby-transformer-remark"
  ],
  siteMetadata: {
    languages
  }
};
