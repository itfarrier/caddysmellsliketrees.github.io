import Link from "gatsby-link";
import * as React from "react";

import Head from "../components/Head";

interface IVideosRu {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      videos: string;
    };
    title: string;
  };
}

const VideosRu: React.SFC<IVideosRu> = ({
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

export default VideosRu;
