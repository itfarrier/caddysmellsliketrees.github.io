import "intl/locale-data/jsonp/ru";
import { addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";
import React from "react";

import Layout from "./index";

import messages from "../data/messages/ru";

addLocaleData(ru);

function IndexLayoutRu({ children, ...other }) {
  return <Layout children={children} i18nMessages={messages} {...other} />;
}

export const IndexLayoutRuQuery = graphql`
  query IndexLayoutRuQuery {
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

export default IndexLayoutRu;
