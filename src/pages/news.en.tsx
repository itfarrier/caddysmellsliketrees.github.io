import * as React from "react";
import Link from "gatsby-link";

interface NewsEnProps {
  menu: {
    news: string;
  };
}

const NewsEn: React.SFC<NewsEnProps> = ({ menu: { news } }) => (
  <React.Fragment>
    <h1>{news}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default NewsEn;
