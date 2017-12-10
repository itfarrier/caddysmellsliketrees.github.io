import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Lyrics = ({ data }) => (
  <div className="main">
    <ul className="lyrics__ul">
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <li key={node.id}>
            <Link to={"/" + node.fields.slug}>{node.headings[0].value}</Link>
          </li>
        );
      })}
    </ul>
  </div>
);

Lyrics.propTypes = {
  data: PropTypes.object.isRequired
};

export const LyricsQuery = graphql`
  query LyricsQuery {
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

export default Lyrics;
