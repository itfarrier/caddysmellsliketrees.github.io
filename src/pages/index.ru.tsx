import * as React from "react";
import Link from "gatsby-link";

const IndexRu: React.SFC = () => (
  <React.Fragment>
    <h1>Главная страница</h1>
    <Link to="/ru/page-2/">На страницу 2</Link>
  </React.Fragment>
);

export default IndexRu;
