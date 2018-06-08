import * as React from "react";
import Link from "gatsby-link";

import LanguageChanger from "./LanguageChanger";

interface SidebarProps {
  children?: any;
  homeLink: string;
  langs: Array<{ index: number; langKey: string; link: string }>;
  menu: {
    about: string;
    donate: string;
    lyrics: string;
    news: string;
  };
}

const Sidebar: React.SFC<SidebarProps> = ({
  homeLink,
  langs,
  menu: { about, donate, lyrics, news }
}) => (
  <aside>
    <nav>
      <ul>
        <li>
          <Link to={`${homeLink}news`}>{news}</Link>
        </li>
        <li>
          <Link to={`${homeLink}lyrics`}>{lyrics}</Link>
        </li>
        <li>
          <Link to={`${homeLink}about`}>{about}</Link>
        </li>
        <li>
          <a href="https://money.yandex.ru/to/410013952610454/500">{donate}</a>
        </li>
      </ul>
      <LanguageChanger langs={langs} />
    </nav>
  </aside>
);

export default Sidebar;
