import Img from 'gatsby-image';
import Link from 'gatsby-link';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './photos.module.scss';

import { IPhotos } from '../interfaces';

const PhotosEn: React.SFC<IPhotos> = (props) => {
    const {
        data: { allDirectory, allFile },
        i18nMessages,
        i18nMessages: {
            pageNames: { photos },
        },
        langKey,
    } = props;

    const folder: string[] = allDirectory.edges.map(
        (edge) => `images/${edge.node.fields.slug.slice(0, -1)}`,
    );
    let show2 = [];
    const show = folder.forEach((item) => {
        return show2.push(allFile.edges.filter((edge) => edge.node.relativeDirectory === item));
    });
    console.log(show2);
    const svgs = show2.map((edge) => (
        <Link
            to={`photos${edge[0].node.relativeDirectory.replace(/images/, '')}/`}
            key={edge[0].node.childImageSharp.original.src}
        >
            <Img resolutions={edge[0].node.childImageSharp.resolutions} />
        </Link>
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
                    }
                    relativeDirectory
                }
            }
        }
    }
`;

export default PhotosEn;
