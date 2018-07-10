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
  pageNames: { about, home, lyrics, store },
  pathname
}) => {
  const svgFill =
    pathname === "/en/" || pathname === "/ru/"
      ? {
          color: "#f0f0f0",
          fill: "#f0f0f0"
        }
      : {
          color: "#0a0a0a",
          fill: "#0a0a0a"
        };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.a} to={homeLink}>
              <IconTree style={svgFill} />
              <span style={svgFill}>{home}</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to={`${homeLink}lyrics`}>
              <IconLyrics style={svgFill} />
              <span style={svgFill}>{lyrics}</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to={`${homeLink}store`}>
              <IconStore style={svgFill} />
              <span style={svgFill}>{store}</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to={`${homeLink}about`}>
              <IconAbout style={svgFill} />
              <span style={svgFill}>{about}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
