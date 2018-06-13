import Link from "gatsby-link";
import * as React from "react";

import LanguageChanger from "./LanguageChanger";

interface ISidebar {
  children?: any;
  homeLink: string;
  langs: Array<{ index: number; langKey: string; link: string }>;
  pageNames: {
    about: string;
    donate: string;
    lyrics: string;
    news: string;
    videos: string;
  };
}

const Sidebar: React.SFC<ISidebar> = ({
  homeLink,
  langs,
  pageNames: { about, donate, lyrics, news, videos }
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
          <Link to={`${homeLink}videos`}>{videos}</Link>
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
