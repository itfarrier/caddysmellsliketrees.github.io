import * as React from "react";
import Link from "gatsby-link";

interface AboutEnProps {
  menu: {
    about: string;
  };
}

const AboutEn: React.SFC<AboutEnProps> = ({ menu: { about } }) => (
  <React.Fragment>
    <h1>{about}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default AboutEn;
