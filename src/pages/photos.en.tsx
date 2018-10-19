import Img from 'gatsby-image';
import Link from 'gatsby-link';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './photos.module.scss';

import { IPhotos } from '../interfaces';

const PhotosEn: React.SFC<IPhotos> = ({
    data: { allDirectory, allFile },
    i18nMessages,
    i18nMessages: {
        pageNames: { photos },
    },
    langKey,
}) => {
    const photoAlbumNames: string[] = allDirectory.edges.map(
        ({
            node: {
                fields: { slug },
            },
        }) => `images/${slug.slice(0, -1)}`,
    );
    const photoAlbums: Array<[]> = [];

    photoAlbumNames.forEach((item: string) => {
        return photoAlbums.push(
            allFile.edges.filter(({ node: { relativeDirectory } }) => relativeDirectory === item),
        );
    });

    const photoAlbumCoversList = photoAlbums.map((photoAlbum: object[]) => {
        const {
            node: {
                childImageSharp: {
                    original: { src },
                    sizes,
                },
                relativeDirectory,
            },
        } = photoAlbum[0];

        return (
            <Link
                className={styles.photoAlbumCoverWithTitle}
                key={src}
                to={`photos${relativeDirectory.replace(/images/, '')}/`}
            >
                <Img
                    alt={`${relativeDirectory.replace(/images\//, '')} cover`}
                    className={styles.wrapper}
                    fadeIn={true}
                    outerWrapperClassName={styles.item}
                    sizes={sizes}
                    title={`${relativeDirectory.replace(/images\//, '')} cover`}
                />
                <div className={styles.title}>
                    <span>
                        {relativeDirectory
                            .replace(/images\/\d\d\d\d-\d\d-\d\d-/, '')
                            .replace(/-/g, ' ')}
                    </span>
                    <span>{photoAlbum.length}</span>
                </div>
            </Link>
        );
    });

    return (
        <article className={styles.article}>
            <Head currentLanguage={langKey} i18nMessages={i18nMessages} page={photos} />
            {photoAlbumCoversList}
        </article>
    );
};

export const PhotosEnQuery = graphql`
    query PhotosEnQuery {
        allDirectory(filter: { relativePath: { regex: "/images//" } }) {
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
    }
`;

export default PhotosEn;
