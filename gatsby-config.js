const languages = require("./src/data/languages");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "en",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript"
  ],
  siteMetadata: {
    languages
  }
};
