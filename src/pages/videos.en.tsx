import * as React from "react";
import Link from "gatsby-link";

interface VideosEnProps {
  menu: {
    videos: string;
  };
}

const VideosEn: React.SFC<VideosEnProps> = ({ menu: { videos } }) => (
  <React.Fragment>
    <h1>{videos}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default VideosEn;
