import isMobile from "ismobilejs";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import styles from "./lyrics.module.css";

const lyrics = ({ data }) => (
  <div className="container">
    <div className="row">
      <div className={isMobile.any ? "col" : "col " + styles.toc}>
        <ul className={isMobile.any ? styles.list : styles.listDesktop}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <li className={styles.link} key={node.id}>
                <Link to={"/" + node.fields.slug}>
                  {node.frontmatter.title}
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
          frontmatter {
            title
          }
          id
        }
      }
    }
  }
`;

export default lyrics;
