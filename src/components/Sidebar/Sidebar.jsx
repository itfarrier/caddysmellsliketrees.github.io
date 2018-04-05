import Link from "gatsby-link";
import React from "react";

import SelectLanguage from "./SelectLanguage";

function Sidebar({ homeLink, langs, menu: { about, donate, lyrics, news } }) {
  return (
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
            <a href="https://money.yandex.ru/to/410013952610454/500">
              {donate}
            </a>
          </li>
        </ul>
        <SelectLanguage langs={langs} />
      </nav>
    </aside>
  );
}

export default Sidebar;
