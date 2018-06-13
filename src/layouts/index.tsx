import "intl";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import * as React from "react";
import { IntlProvider } from "react-intl";

import Head from "../components/Head";
import Sidebar from "../components/Sidebar";

interface IIndexLayout {
  children?: any;
  data: {
    site: {
      siteMetadata: { languages: { defaultLangKey: string; langs: string[] } };
    };
  };
  location: {
    pathname: string;
  };
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      about: string;
      donate: string;
      lyrics: string;
      news: string;
      videos: string;
    };
    title: string;
  };
}

const IndexLayout: React.SFC<IIndexLayout> = props => {
  const {
    children,
    data: {
      site: {
        siteMetadata: {
          languages: { defaultLangKey, langs }
        }
      }
    },
    location: { pathname },
    i18nMessages,
    i18nMessages: { pageNames }
  } = props;
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, pathname));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <React.Fragment>
        <Head i18nMessages={i18nMessages} />
        <Sidebar homeLink={homeLink} langs={langsMenu} pageNames={pageNames} />
        <main>{children({ i18nMessages, ...props })}</main>
      </React.Fragment>
    </IntlProvider>
  );
};

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

export default IndexLayout;
