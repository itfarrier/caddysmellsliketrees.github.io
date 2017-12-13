import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import styles from "./lyrics.module.css";

const lyrics = ({ data }) => (
  <div className={"level is-mobile " + styles.toc}>
    <ul className={"level-item " + styles.ul}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <li key={node.id}>
            <Link className={styles.link} to={"/" + node.fields.slug}>
              {node.headings[0].value}
            </Link>
          </li>
        );
      })}
    </ul>
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
