import "intl";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider } from "react-intl";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import Sidebar from "../components/Sidebar";

function IndexLayout(props) {
  const {
    children,
    data: {
      site: {
        siteMetadata: { languages: { defaultLangKey, langs: languages } }
      }
    },
    i18nMessages,
    i18nMessages: { description, menu, title },
    location: { pathname }
  } = props;

  const langKey = getCurrentLangKey(languages, defaultLangKey, pathname);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(
    languages,
    langKey,
    getUrlForLang(homeLink, pathname)
  );

  console.log(props);

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <Fragment>
        <Helmet
          meta={[
            { content: description, name: "description" },
            {
              content: title,
              name: "apple-mobile-web-app-title"
            },
            {
              content: title,
              name: "application-name"
            },
            { content: title, name: "keywords" }
          ]}
          title={`${title} — ${description}`}
        />
        <Sidebar homeLink={homeLink} langs={langsMenu} menu={menu} />
        <main>{children()}</main>
      </Fragment>
    </IntlProvider>
  );
}

export const IndexLayoutQuery = graphql`
  query IndexLayoutQuery {
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

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  i18nMessages: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default IndexLayout;
