import * as React from "react";

import Head from "../components/Head";

interface ITemplate {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        type: string;
      };
      html: string;
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
}

const Template: React.SFC<ITemplate> = ({
  data,
  data: {
    markdownRemark: {
      frontmatter: { title, type },
      html
    }
  },
  i18nMessages,
  i18nMessages: {
    pageNames: { lyrics, news }
  }
}) => {
  const head =
    type === "lyrics" ? (
      <Head i18nMessages={i18nMessages} page={lyrics} subPage={title} />
    ) : (
      <Head i18nMessages={i18nMessages} page={news} subPage={title} />
    );

  return (
    <React.Fragment>
      {head}
      <article dangerouslySetInnerHTML={{ __html: html }} />
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
