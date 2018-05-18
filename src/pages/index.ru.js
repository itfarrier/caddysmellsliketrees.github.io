import React, { Fragment } from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <Fragment>
    <h1>Что-то на русском</h1>
    <Link to="/ru/page-2/">На страницу 2</Link>
  </Fragment>
);

export default IndexPage;
