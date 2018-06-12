import * as React from "react";
import Link from "gatsby-link";

interface NewsEnProps {
  pageNames: {
    news: string;
  };
}

const NewsEn: React.SFC<NewsEnProps> = ({ pageNames: { news } }) => (
  <React.Fragment>
    <h1>{news}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default NewsEn;
