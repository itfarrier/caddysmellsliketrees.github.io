import * as React from "react";
import Link from "gatsby-link";

interface LyricsEnProps {
  menu: {
    lyrics: string;
  };
}

const LyricsEn: React.SFC<LyricsEnProps> = ({ menu: { lyrics } }) => (
  <React.Fragment>
    <h1>{lyrics}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default LyricsEn;
