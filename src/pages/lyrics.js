import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const lyrics = ({ data }) => (
  <div className="container">
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return (
        <div className="row" key={node.id}>
          <div className="col-8 offset-2">
            <Link className="lyrics-link" to={"/" + node.fields.slug}>{node.headings[0].value}</Link>
          </div>
        </div>
      );
    })}
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
