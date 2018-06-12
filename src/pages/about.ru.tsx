import * as React from "react";
import Link from "gatsby-link";

interface AboutRuProps {
  pageNames: {
    about: string;
  };
}

const AboutRu: React.SFC<AboutRuProps> = ({ pageNames: { about } }) => (
  <React.Fragment>
    <h1>{about}</h1>
    <Link to="/ru/">Back to the index page</Link>
  </React.Fragment>
);

export default AboutRu;
