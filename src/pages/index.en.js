import React, { Fragment } from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <Fragment>
    <h1>Something in English</h1>
    <Link to="/en/page-2/">Go to page 2</Link>
  </Fragment>
);

export default IndexPage;
