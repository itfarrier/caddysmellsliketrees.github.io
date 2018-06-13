import Link from "gatsby-link";
import * as React from "react";

interface ILanguageChanger {
  children?: any;
  langs: Array<{ index: number; langKey: string; link: string }>;
}

const LanguageChanger: React.SFC<ILanguageChanger> = ({ langs }) => {
  const links: object = langs.map(lang => (
    <Link to={lang.link} key={lang.langKey}>
      <li>{lang.langKey}</li>
    </Link>
  ));

  return <ul>{links}</ul>;
};

export default LanguageChanger;
