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
        (edge) => `images/${edge.node.fields.slug.slice(0, -1)}`,
    );
    const photoAlbums: Array<[]> = [];

    photoAlbumNames.forEach((item) => {
        return photoAlbums.push(
            allFile.edges.filter((edge) => edge.node.relativeDirectory === item),
        );
    });
    const photoAlbumCoversList = photoAlbums.map((photoAlbum) => (
        <Link
            className={styles.photoAlbumCoverWithTitle}
            key={photoAlbum[0].node.childImageSharp.original.src}
            to={`photos${photoAlbum[0].node.relativeDirectory.replace(/images/, '')}/`}
        >
            <Img
                alt={`${photoAlbum[0].node.relativeDirectory.replace(/images\//, '')} cover`}
                className={styles.wrapper}
                imgStyle={styles.img}
                outerWrapperClassName={styles.item}
                resolutions={photoAlbum[0].node.childImageSharp.resolutions}
                sizes={photoAlbum[0].node.childImageSharp.sizes}
            />
            <div className={styles.title}>
                <span>
                    {photoAlbum[0].node.relativeDirectory
                        .replace(/images\/\d\d\d\d-\d\d-\d\d-/, '')
                        .replace(/-/g, ' ')}
                </span>
                <span>{photoAlbum.length}</span>
            </div>
        </Link>
    ));

    return (
        <React.Fragment>
            <Head currentLanguage={langKey} i18nMessages={i18nMessages} page={photos} />
            <div className={styles.div}>{photoAlbumCoversList}</div>
        </React.Fragment>
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
                            height
                            src
                            width
                        }
                        resolutions {
                            aspectRatio
                            base64
                            height
                            originalName
                            src
                            srcSet
                            srcSetWebp
                            srcWebp
                            tracedSVG
                            width
                        }
                        sizes {
                            aspectRatio
                            base64
                            originalImg
                            originalName
                            sizes
                            src
                            srcSet
                            srcSetWebp
                            srcWebp
                            tracedSVG
                        }
                    }
                    relativeDirectory
                }
            }
        }
    }
`;

export default PhotosEn;
