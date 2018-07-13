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
}) => {
  const pageRoot = pathname === "/en/" || pathname === "/ru/";
  const spanClassName = pageRoot ? styles.spanRoot : styles.span;
  const svgClassName = pageRoot ? styles.svgRoot : styles.svg;

  return (
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
              <IconTree className={svgClassName} />
              <span className={spanClassName}>{home}</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              activeClassName={styles.aActive}
              className={styles.a}
              isActive={() => ~pathname.indexOf(`${homeLink}lyrics`)}
              to={`${homeLink}lyrics`}
            >
              <IconLyrics className={svgClassName} />
              <span className={spanClassName}>{lyrics}</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              activeClassName={styles.aActive}
              className={styles.a}
              isActive={() => ~pathname.indexOf(`${homeLink}store`)}
              to={`${homeLink}store`}
            >
              <IconStore className={svgClassName} />
              <span className={spanClassName}>{store}</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              activeClassName={styles.aActive}
              className={styles.a}
              isActive={() => ~pathname.indexOf(`${homeLink}about`)}
              to={`${homeLink}about`}
            >
              <IconAbout className={svgClassName} />
              <span className={spanClassName}>{about}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
