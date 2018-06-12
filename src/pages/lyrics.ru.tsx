import * as React from "react";
import Link from "gatsby-link";

interface LyricsRuProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            langKey: string;
            slug: string;
          };
          frontmatter: {
            title: string;
          };
          id: string;
        };
      }>;
    };
  };
  pageNames: {
    lyrics: string;
  };
}

const LyricsRu: React.SFC<LyricsRuProps> = ({
  data,
  pageNames: { lyrics }
}) => (
  <React.Fragment>
    <h1>{lyrics}</h1>
    <div>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </React.Fragment>
);

export const LyricsRuQuery = graphql`
  query LyricsRuQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { fields: { langKey: { regex: "/ru/" } } }
    ) {
      edges {
        node {
          fields {
            langKey
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

export default LyricsRu;
