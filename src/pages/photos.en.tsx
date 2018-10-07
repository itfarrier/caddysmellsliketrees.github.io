import Img from 'gatsby-image';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './photos.module.scss';

import { IPhotos } from '../interfaces';

const PhotosEn: React.SFC<IPhotos> = (props) => {
    const {
        data: {
            allFile: { edges },
        },
        i18nMessages,
        i18nMessages: {
            pageNames: { photos },
        },
        langKey,
    } = props;

    const svgs = edges.map((edge) => (
        <a
            href={edge.node.childImageSharp.original.src}
            key={edge.node.childImageSharp.original.src}
        >
            <Img resolutions={edge.node.childImageSharp.resolutions} />
        </a>
    ));

    console.log(props);

    return (
        <React.Fragment>
            <Head currentLanguage={langKey} i18nMessages={i18nMessages} page={photos} />
            <div className={styles.div}>
                {svgs}
                <div className={styles.item}>
                    <div className={styles.title} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} />
                </div>
            </div>
        </React.Fragment>
    );
};

export const PhotosEnQuery = graphql`
    query PhotosEnQuery {
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
                    }
                    relativeDirectory
                }
            }
        }
    }
`;

export default PhotosEn;
