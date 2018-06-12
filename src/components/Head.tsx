import Helmet from "react-helmet";
import * as React from "react";

interface HeadProps {
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
  page?: string;
  subPage?: string;
}

const Head: React.SFC<HeadProps> = ({
  i18nMessages: {
    description,
    keywords,
    pageNames: { videos },
    title
  },
  page,
  subPage
}) => {
  const fullTitle: string = subPage
    ? `${title} — ${description} — ${page} — ${subPage}`
    : page
      ? `${title} — ${description} — ${page}`
      : `${title} — ${description}`;

  return (
    <Helmet
      meta={[
        { name: "description", content: description },
        { name: "keywords", content: keywords }
      ]}
      title={fullTitle}
    />
  );
};

export default Head;
