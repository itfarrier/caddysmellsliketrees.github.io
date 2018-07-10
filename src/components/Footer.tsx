import * as React from "react";

import LanguageChanger from "./LanguageChanger";

import * as styles from "./Footer.module.scss";

interface IFooter {
  langs: Array<{ index: number; langKey: string; link: string }>;
}

const Footer: React.SFC<IFooter> = ({ langs }) => (
  <footer className={styles.footer}>
    <LanguageChanger langs={langs} />
  </footer>
);

export default Footer;
