const languages = require("./src/data/languages");

module.exports = {
  siteMetadata: {
    languages,
    siteUrl: "https://caddysmellsliketrees.ru",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    }
  ]
};
