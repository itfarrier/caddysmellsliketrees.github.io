import { graphql, StaticQuery } from 'gatsby';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/ru';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru]);

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

import * as styles from './layout.module.scss';

import { IIndexLayout } from '../interfaces';

const IndexLayout: React.SFC<IIndexLayout> = (props) => {
    const {
        children,
        data: {
            site: {
                siteMetadata: {
                    languages: { defaultLangKey, langs },
                },
            },
        },
        location: { pathname },
    } = props;
    const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, pathname));
    const i18nMessages = require(`../data/messages/${langKey}`);

    return (
        <IntlProvider locale={langKey} messages={i18nMessages}>
            <React.Fragment>
                <Head currentLanguage={langKey} i18nMessages={i18nMessages} />
                <Header
                    homeLink={homeLink}
                    pageNames={i18nMessages.pageNames}
                    pathname={pathname}
                />
                <div className={styles.space} />
                <main className={styles.main}>{children}</main>
                <Footer langs={langsMenu} />
            </React.Fragment>
        </IntlProvider>
    );
};

export default (props) => (
    <StaticQuery
        query={graphql`
            query IndexLayoutQuery {
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
        render={(data) => <IndexLayout data={data} {...props} />}
    />
);
