import { getCurrentLangKey } from "ptz-i18n";
import * as React from "react";

import Head from "../components/Head";

import * as styles from "./Template.module.scss";

interface ITemplate {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        type: string;
      };
      html: string;
    };
    site: {
      siteMetadata: {
        languages: {
          defaultLangKey: string;
          langs: Array<{ index: number; langKey: string; link: string }>;
        };
      };
    };
  };
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      about?: string;
      donate?: string;
      lyrics?: string;
      news?: string;
      videos?: string;
    };
    title: string;
  };
  location: {
    pathname: string;
  };
}

const Template: React.SFC<ITemplate> = ({
  data,
  data: {
    markdownRemark: {
      frontmatter: { title, type },
      html
    },
    site: {
      siteMetadata: {
        languages: { defaultLangKey, langs }
      }
    }
  },
  i18nMessages,
  i18nMessages: {
    pageNames: { lyrics, news }
  },
  location: { pathname }
}) => {
  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
  const head =
    type === "lyrics" ? (
      <Head
        currentLanguage={langKey}
        i18nMessages={i18nMessages}
        page={lyrics}
        subPage={title}
      />
    ) : (
      <Head
        currentLanguage={langKey}
        i18nMessages={i18nMessages}
        page={news}
        subPage={title}
      />
    );

  return (
    <React.Fragment>
      {head}
      <article
        className={styles.article}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </React.Fragment>
  );
};

export const TemplateQuery = graphql`
  query TemplateQuery($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        type
      }
      html
    }
  }
`;

export default Template;
