import Link from 'gatsby-link';
import * as React from 'react';

import * as styles from './Header.module.scss';

import { ReactComponent as IconAbout } from '../../static/vectors/about.svg';
import { ReactComponent as IconTree } from '../../static/vectors/logo.svg';
import { ReactComponent as IconLyrics } from '../../static/vectors/lyrics.svg';
import { ReactComponent as IconPhotos } from '../../static/vectors/photos.svg';

import { IHeader } from '../interfaces';

const Header: React.SFC<IHeader> = ({
    homeLink,
    pageNames,
    pageNames: { about, home, lyrics, photos },
    pathname,
}) => {
    const activeStyleConditionForAboutLink = () => checkThatThePathnameContains('about');
    const activeStyleConditionForHomeLink = () => pathname === homeLink;
    const activeStyleConditionForLyricsLink = () => checkThatThePathnameContains('lyrics');
    const activeStyleConditionForStoreLink = () => checkThatThePathnameContains('photos');
    const checkThatThePathnameContains = (theWord: string) =>
        pathname.indexOf(`${homeLink}${theWord}`) > -1;

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link
                            activeClassName={styles.aActive}
                            className={styles.a}
                            isActive={activeStyleConditionForHomeLink}
                            to={homeLink}
                        >
                            <IconTree className={styles.svg} />
                            <span className={styles.span}>{home}</span>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            activeClassName={styles.aActive}
                            className={styles.a}
                            isActive={activeStyleConditionForLyricsLink}
                            to={`${homeLink}lyrics`}
                        >
                            <IconLyrics className={styles.svg} />
                            <span className={styles.span}>{lyrics}</span>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            activeClassName={styles.aActive}
                            className={styles.a}
                            isActive={activeStyleConditionForStoreLink}
                            to={`${homeLink}photos`}
                        >
                            <IconPhotos className={styles.svg} />
                            <span className={styles.span}>{photos}</span>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link
                            activeClassName={styles.aActive}
                            className={styles.a}
                            isActive={activeStyleConditionForAboutLink}
                            to={`${homeLink}about`}
                        >
                            <IconAbout className={styles.svg} />
                            <span className={styles.span}>{about}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
