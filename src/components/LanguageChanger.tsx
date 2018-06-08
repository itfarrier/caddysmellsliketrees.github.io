import * as React from "react";
import Link from "gatsby-link";

interface SelectLanguageProps {
  children?: any;
  langs: Array<{ index: number; langKey: string; link: string }>;
}

const LanguageChanger: React.SFC<SelectLanguageProps> = ({ langs }) => {
  const links: object = langs.map(lang => (
    <Link to={lang.link} key={lang.langKey}>
      <li>{lang.langKey}</li>
    </Link>
  ));

  return <ul>{links}</ul>;
};

export default LanguageChanger;
