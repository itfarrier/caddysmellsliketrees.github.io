import Link from "gatsby-link";
import * as React from "react";

import * as styles from "./LanguageChanger.module.scss";

interface ILanguageChanger {
  children?: any;
  langs: Array<{ index: number; langKey: string; link: string }>;
}

const LanguageChanger: React.SFC<ILanguageChanger> = ({ langs }) => {
  const links: object = langs.map(lang => (
    <Link className={styles.a} to={lang.link} key={lang.langKey}>
      {lang.langKey}
    </Link>
  ));

  return <React.Fragment>{links}</React.Fragment>;
};

export default LanguageChanger;
