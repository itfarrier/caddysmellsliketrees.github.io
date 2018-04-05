import "intl/locale-data/jsonp/en";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import React from "react";

import Layout from "./index";

import messages from "../data/messages/en";

addLocaleData(en);

function IndexLayoutEn({ children, ...other }) {
  return <Layout children={children} i18nMessages={messages} {...other} />;
}

export const IndexLayoutEnQuery = graphql`
  query IndexLayoutEnQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;

export default IndexLayoutEn;
