import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/ru';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru]);

import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';

import * as styles from './index.module.scss';

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
                <main className={styles.main}>{children({ i18nMessages, langKey, ...props })}</main>
                <Footer langs={langsMenu} />
            </React.Fragment>
        </IntlProvider>
    );
};

export const IndexLayoutQuery = graphql`
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
`;

export default IndexLayout;
