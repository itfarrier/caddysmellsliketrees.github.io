import * as React from "react";
import { addLocaleData } from "react-intl";
import * as ru from "react-intl/locale-data/ru";

import * as messages from "../data/messages/ru";

// Order of two below imports is IMPORTANT
import IndexLayout from "./index";
import "intl/locale-data/jsonp/ru";

addLocaleData(ru);

const IndexLayoutRu: React.SFC = props => (
  <IndexLayout i18nMessages={messages} {...props} />
);

export const IndexLayoutRuQuery = graphql`
  query IndexLayoutPtQuery {
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
