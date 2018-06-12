import * as React from "react";
import Link from "gatsby-link";

interface VideosEnProps {
  pageNames: {
    videos: string;
  };
}

const VideosEn: React.SFC<VideosEnProps> = ({ pageNames: { videos } }) => (
  <React.Fragment>
    <h1>{videos}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default VideosEn;
