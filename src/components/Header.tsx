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
}

const Header: React.SFC<IHeader> = ({
  homeLink,
  pageNames: { about, home, lyrics, store }
}) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.item}>
          <Link to={homeLink}>
            <IconTree />
            <span>{home}</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={`${homeLink}lyrics`}>
            <IconLyrics />
            <span>{lyrics}</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={`${homeLink}store`}>
            <IconStore />
            <span>{store}</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to={`${homeLink}about`}>
            <IconAbout />
            <span>{about}</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
