import * as React from "react";
import Link from "gatsby-link";

import Head from "../components/Head";

interface VideosEnProps {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      videos: string;
    };
    title: string;
  };
}

const VideosEn: React.SFC<VideosEnProps> = ({
  i18nMessages,
  i18nMessages: {
    description,
    keywords,
    pageNames: { videos }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={videos} />
    <h1>{videos}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default VideosEn;
