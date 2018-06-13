import Link from "gatsby-link";
import * as React from "react";

import Head from "../components/Head";

interface INewsRu {
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
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      news: string;
    };
    title: string;
  };
}

const NewsRu: React.SFC<INewsRu> = ({
  data,
  i18nMessages,
  i18nMessages: {
    description,
    keywords,
    pageNames: { news }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={news} />
    <h1>{news}</h1>
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

export const NewsRuQuery = graphql`
  query NewsRuQuery {
    allMarkdownRemark(
      filter: {
        fields: { langKey: { regex: "/ru/" } }
        frontmatter: { type: { eq: "post" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            langKey
            slug
          }
          frontmatter {
            date
            title
          }
          id
        }
      }
    }
  }
`;

export default NewsRu;
