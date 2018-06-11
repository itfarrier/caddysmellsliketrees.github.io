import * as React from "react";
import Link from "gatsby-link";

interface VideosRuProps {
  menu: {
    videos: string;
  };
}

const VideosRu: React.SFC<VideosRuProps> = ({ menu: { videos } }) => (
  <React.Fragment>
    <h1>{videos}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default VideosRu;
