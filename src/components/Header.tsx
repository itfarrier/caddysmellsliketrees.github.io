import Link from "gatsby-link";
import * as React from "react";

import * as styles from "./Header.module.scss";

import { ReactComponent as IconAbout } from "../../static/vectors/about.svg";
import { ReactComponent as IconLyrics } from "../../static/vectors/lyrics.svg";
import { ReactComponent as IconStore } from "../../static/vectors/store.svg";
import { ReactComponent as IconTree } from "../../static/vectors/tree.svg";

interface IHeader {
  children?: any;
  homeLink: string;
  pageNames: {
    about: string;
    donate: string;
    home: string;
    lyrics: string;
    news: string;
    store: string;
    videos: string;
  };
  pathname: string;
}

const Header: React.SFC<IHeader> = ({
  homeLink,
  pageNames,
  pageNames: { about, home, lyrics, store },
  pathname
}) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link
            activeClassName={styles.aActive}
            className={styles.a}
            isActive={() => pathname === homeLink}
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
            isActive={() => ~pathname.indexOf(`${homeLink}lyrics`)}
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
            isActive={() => ~pathname.indexOf(`${homeLink}store`)}
            to={`${homeLink}store`}
          >
            <IconStore className={styles.svg} />
            <span className={styles.span}>{store}</span>
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            activeClassName={styles.aActive}
            className={styles.a}
            isActive={() => ~pathname.indexOf(`${homeLink}about`)}
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

export default Header;
