import * as React from "react";
import Link from "gatsby-link";

interface AboutRuProps {
  menu: {
    about: string;
  };
}

const AboutRu: React.SFC<AboutRuProps> = ({ menu: { about } }) => (
  <React.Fragment>
    <h1>{about}</h1>
    <Link to="/ru/">Back to the index page</Link>
  </React.Fragment>
);

export default AboutRu;
