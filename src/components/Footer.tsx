import * as React from "react";

import LanguageChanger from "./LanguageChanger";

interface IFooter {
  langs: Array<{ index: number; langKey: string; link: string }>;
}

const Footer: React.SFC<IFooter> = ({ langs }) => (
  <footer>
    <LanguageChanger langs={langs} />
  </footer>
);

export default Footer;
