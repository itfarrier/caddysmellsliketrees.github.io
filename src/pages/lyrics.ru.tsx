import Link from "gatsby-link";
import * as React from "react";

import Head from "../components/Head";

import * as styles from "./lyrics.module.scss";

interface ILyricsRu {
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
      lyrics: string;
    };
    title: string;
  };
}

const LyricsRu: React.SFC<ILyricsRu> = ({
  data,
  i18nMessages,
  i18nMessages: {
    description,
    keywords,
    pageNames: { lyrics }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={lyrics} />
    <ul className={styles.ul}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li className={styles.li} key={node.id}>
          <Link className={styles.a} to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

export const LyricsRuQuery = graphql`
  query LyricsRuQuery {
    allMarkdownRemark(
      filter: {
        fields: { langKey: { regex: "/ru/" } }
        frontmatter: { type: { eq: "lyrics" } }
      }
      sort: { fields: [frontmatter___title], order: ASC }
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

export default LyricsRu;
