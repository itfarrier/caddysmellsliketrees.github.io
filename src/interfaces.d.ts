export interface IAbout {
    data: IData;
    i18nMessages: II18nMessages;
    langKey: string;
}

export interface IData {
    allDirectory: {
        edges: Array<{
            node: {
                fields: {
                    slug: string;
                };
            };
        }>;
    };
    allFile: {
        edges: Array<{
            node: {
                childImageSharp: {
                    original: {
                        height: number;
                        src: string;
                        width: number;
                    };
                    resolutions: {
                        aspectRatio: number;
                        base64: string;
                        height: number;
                        originalName: string;
                        src: string;
                        srcSet: string;
                        srcSetWebp: string;
                        srcWebp: string;
                        tracedSVG: string;
                        width: number;
                    };
                    sizes: {
                        aspectRatio: number;
                        base64: string;
                        height: number;
                        originalName: string;
                        src: string;
                        srcSet: string;
                        srcSetWebp: string;
                        srcWebp: string;
                        tracedSVG: string;
                        width: number;
                    };
                };
                publicURL: string;
                relativeDirectory: string;
            };
        }>;
    };
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
    markdownRemark: {
        frontmatter: {
            title: string;
            type: string;
        };
        html: string;
    };
    site: {
        siteMetadata: {
            languages: {
                defaultLangKey: string;
                langs: { index: number; langKey: string; link: string }[];
            };
        };
    };
}

export interface II18nMessages {
    description: string;
    keywords: string[];
    pageNames: {
        about: string;
        donate: string;
        home: string;
        lyrics: string;
        news: string;
        photos: string;
        videos: string;
    };
    title: string;
}

export interface IIndex {
    data: IData;
}

export interface IIndexLayout {
    children?: any;
    data: IData;
    i18nMessages: II18nMessages;
    location: {
        pathname: string;
    };
}

export interface ILyrics {
    data: IData;
    i18nMessages: II18nMessages;
    langKey: string;
}

export interface IPhotos {
    data: IData;
    i18nMessages: II18nMessages;
    langKey: string;
}

export interface ITemplate {
    data: IData;
    i18nMessages: II18nMessages;
    location: {
        pathname: string;
    };
}
