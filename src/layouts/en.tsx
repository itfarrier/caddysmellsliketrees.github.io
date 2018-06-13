import * as React from "react";
import { addLocaleData } from "react-intl";
import * as en from "react-intl/locale-data/en";

import * as messages from "../data/messages/en";

// Order of two below imports is IMPORTANT
import IndexLayout from "./index";
import "intl/locale-data/jsonp/en";

addLocaleData(en);

const IndexLayoutEn: React.SFC = props => (
  <IndexLayout i18nMessages={messages} {...props} />
);

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
