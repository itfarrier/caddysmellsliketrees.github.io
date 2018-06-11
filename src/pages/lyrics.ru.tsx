import * as React from "react";
import Link from "gatsby-link";

interface LyricsRuProps {
  menu: {
    lyrics: string;
  };
}

const LyricsRu: React.SFC<LyricsRuProps> = ({ menu: { lyrics } }) => (
  <React.Fragment>
    <h1>{lyrics}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default LyricsRu;
