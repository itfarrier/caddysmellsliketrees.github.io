import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import styles from "./lyrics.module.css";

const lyrics = ({ data }) => (
  <div className="container">
    <div className="row">
      <div className={"col " + styles.toc}>
        <ul className={styles.list}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <li className={styles.link} key={node.id}>
                <Link to={"/" + node.fields.slug}>
                  {node.headings[0].value}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);

lyrics.propTypes = {
  data: PropTypes.object.isRequired
};

export const lyricsQuery = graphql`
  query lyricsQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          id
          headings {
            value
          }
        }
      }
    }
  }
`;

export default lyrics;
