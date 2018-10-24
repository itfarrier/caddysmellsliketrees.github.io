import { graphql, StaticQuery } from 'gatsby';
import { getCurrentLangKey } from 'ptz-i18n';
import * as React from 'react';

import Head from '../components/Head';

import * as styles from './LyricsAndNewsTemplate.module.scss';

import { ITemplate } from '../interfaces';

const LyricsAndNewsTemplate: React.SFC<ITemplate> = ({
    data: {
        markdownRemark: {
            frontmatter: { title, type },
            html,
        },
        site: {
            siteMetadata: {
                languages: { defaultLangKey, langs },
            },
        },
    },
    i18nMessages,
    i18nMessages: {
        pageNames: { lyrics, news },
    },
    location: { pathname },
}) => {
    const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
    const head =
        type === 'lyrics' ? (
            <Head
                currentLanguage={langKey}
                i18nMessages={i18nMessages}
                page={lyrics}
                subPage={title}
            />
        ) : (
            <Head
                currentLanguage={langKey}
                i18nMessages={i18nMessages}
                page={news}
                subPage={title}
            />
        );

    return (
        <React.Fragment>
            {head}
            <article className={styles.article} dangerouslySetInnerHTML={{ __html: html }} />
        </React.Fragment>
    );
};

export default (props) => (
    <StaticQuery
        query={graphql`
            query LyricsAndNewsTemplateQuery($path: String!) {
                markdownRemark(fields: { slug: { eq: $path } }) {
                    frontmatter {
                        title
                        type
                    }
                    html
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
        `}
        render={(data) => <LyricsAndNewsTemplate data={data} {...props} />}
    />
);
