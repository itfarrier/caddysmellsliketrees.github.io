import Img from 'gatsby-image';
import { getCurrentLangKey } from 'ptz-i18n';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './Template.module.scss';

import { ITemplate } from '../interfaces';

const Photos: React.SFC<ITemplate> = (props) => {
    const {
        data: {
            allFile: { edges },
        },
        i18nMessages,
        i18nMessages: {
            pageNames: { lyrics, news },
        },
        location: { pathname },
    } = props;

    const folder = `images${pathname.replace(/\/\w*\/\w*/, '')}`.slice(0, -1);
    const show = edges.filter((edge) => edge.node.relativeDirectory === folder);
    const svgs = show.map((edge) => (
        <a
            href={edge.node.childImageSharp.original.src}
            key={edge.node.childImageSharp.original.src}
        >
            <Img sizes={edge.node.childImageSharp.sizes} />
        </a>
    ));

    return <React.Fragment>{svgs}</React.Fragment>;
};

export const PhotosQuery = graphql`
    query PhotosQuery {
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

export default Photos;
