import * as React from "react";
import Link from "gatsby-link";

interface VideosRuProps {
  pageNames: {
    videos: string;
  };
}

const VideosRu: React.SFC<VideosRuProps> = ({ pageNames: { videos } }) => (
  <React.Fragment>
    <h1>{videos}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default VideosRu;
