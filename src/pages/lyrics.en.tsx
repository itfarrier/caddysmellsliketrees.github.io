import Link from 'gatsby-link';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './lyrics.module.scss';

import { ILyrics } from '../interfaces';

const LyricsEn: React.SFC<ILyrics> = ({
    data,
    i18nMessages,
    i18nMessages: {
        description,
        keywords,
        pageNames: { lyrics },
    },
    langKey,
}) => (
    <React.Fragment>
        <Head currentLanguage={langKey} i18nMessages={i18nMessages} page={lyrics} />
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

export const LyricsEnQuery = graphql`
    query LyricsEnQuery {
        allMarkdownRemark(
            filter: {
                fields: { langKey: { regex: "/en/" } }
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

export default LyricsEn;
