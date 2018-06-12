import "intl";
import * as React from "react";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import Helmet from "react-helmet";
import { IntlProvider } from "react-intl";

import Sidebar from "../components/Sidebar";

interface IndexLayoutProps {
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

const IndexLayout: React.SFC<IndexLayoutProps> = props => {
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
    i18nMessages: { description, keywords, pageNames, title }
  } = props;
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, pathname));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <React.Fragment>
        <Helmet
          meta={[
            { name: "description", content: description },
            { name: "keywords", content: keywords }
          ]}
          title={`${title} — ${description}`}
        />
        <Sidebar homeLink={homeLink} langs={langsMenu} pageNames={pageNames} />
        <main>{children({ pageNames, ...props })}</main>
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
