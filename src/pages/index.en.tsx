import * as React from "react";
import Link from "gatsby-link";

const IndexEn: React.SFC = () => (
  <React.Fragment>
    <h1>Index page</h1>
    <Link to="/en/page-2/">Go to page 2</Link>
  </React.Fragment>
);

export default IndexEn;
