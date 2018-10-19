import Img from 'gatsby-image';
import { getCurrentLangKey } from 'ptz-i18n';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './PhotoAlbumTemplate.module.scss';

import { ITemplate } from '../interfaces';

const PhotoAlbumTemplate: React.SFC<ITemplate> = ({
    data: {
        allFile: { edges },
        site: {
            siteMetadata: {
                languages: { defaultLangKey, langs },
            },
        },
    },
    i18nMessages,
    i18nMessages: {
        pageNames: { photos },
    },
    location: { pathname },
}) => {
    const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
    const photoAlbumName = `images${pathname.replace(/\/\w*\/\w*/, '')}`.slice(0, -1);
    const photoAlbumToShow = edges.filter(
        ({ node: { relativeDirectory } }) => relativeDirectory === photoAlbumName,
    );
    const photoAlbumView = photoAlbumToShow.map(
        ({
            node: {
                childImageSharp: {
                    original: { src },
                    sizes,
                },
                relativeDirectory,
            },
        }) => (
            <a href={src} key={src}>
                <Img
                    alt={`${relativeDirectory.replace(/images\//, '')}`}
                    className={styles.wrapper}
                    outerWrapperClassName={styles.item}
                    sizes={sizes}
                />
            </a>
        ),
    );
    const subPage = pathname.replace(/\/\w*\/\w*\//, '').slice(0, -1);

    return (
        <article className={styles.article}>
            <Head
                currentLanguage={langKey}
                i18nMessages={i18nMessages}
                page={photos}
                subPage={subPage}
            />
            {photoAlbumView}
        </article>
    );
};

export const PhotoAlbumTemplateQuery = graphql`
    query PhotoAlbumTemplateQuery {
        allDirectory {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
        allFile(filter: { relativePath: { regex: "/images/" } }) {
            edges {
                node {
                    childImageSharp {
                        original {
                            src
                        }
                        sizes {
                            ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                    relativeDirectory
                }
            }
        }
        site {
            siteMetadata {
                languages {
                    defaultLangKey
                    langs
                }
            }
        }
    }
`;

export default PhotoAlbumTemplate;
