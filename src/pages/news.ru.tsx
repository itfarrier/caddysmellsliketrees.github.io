import * as React from "react";
import Link from "gatsby-link";

interface NewsRuProps {
  menu: {
    news: string;
  };
}

const NewsRu: React.SFC<NewsRuProps> = ({ menu: { news } }) => (
  <React.Fragment>
    <h1>{news}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default NewsRu;
