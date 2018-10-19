import Img from 'gatsby-image';
import Link from 'gatsby-link';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './photos.module.scss';

import { IPhotoAlbums, IPhotos } from '../interfaces';

const PhotosRu: React.SFC<IPhotos> = ({
    data: { allDirectory, allFile },
    i18nMessages,
    i18nMessages: {
        pageNames: { photos },
        photoAlbums,
    },
    langKey,
}) => {
    const photoAlbumNames: object[] = allDirectory.edges.map(({ node: { fields: { slug } } }) => {
        const photoAlbumData = photoAlbums.find(
            (photoAlbum: IPhotoAlbums) => photoAlbum.slug === slug,
        );

        return { photoAlbumData, path: `images/${slug.slice(0, -1)}` };
    });
    const photoAlbumsToShow: Array<[]> = [];

    photoAlbumNames.forEach(({ path }) =>
        photoAlbumsToShow.push(
            allFile.edges.filter(({ node: { relativeDirectory } }) => relativeDirectory === path),
        ),
    );

    const photoAlbumCoversList = photoAlbumsToShow.map((photoAlbum: object[]) => {
        const {
            node: {
                childImageSharp: {
                    original: { src },
                    sizes,
                },
                relativeDirectory,
            },
        } = photoAlbum[0];
        const {
            photoAlbumData: {
                date: { day, month, year },
                title,
            },
        } = photoAlbumNames.find((photoAlbumName) => photoAlbumName.path === relativeDirectory);

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
                    <span>{`${title} ${day}.${month}.${year}`}</span>
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

export const PhotosRuQuery = graphql`
    query PhotosRuQuery {
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

export default PhotosRu;
