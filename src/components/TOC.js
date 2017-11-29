import React from "react";
import Link from "gatsby-link";

class TOC extends React.Component {
  render() {
    return (
      <nav className="toc">
        <ul>
          <li>
            <Link to="/lyrics/#***">***</Link>
          </li>
          <li>
            <Link to="/lyrics/#SagaORonine">САГА О&nbsp;РОНИНЕ</Link>
          </li>
          <li>
            <Link to="/lyrics/#malo">МАЛО</Link>
          </li>
          <li>
            <Link to="/lyrics/#kluvikiNot">КЛЮВИКИ НОТ</Link>
          </li>
          <li>
            <Link to="/lyrics/#vKluvikah">В&nbsp;КЛЮВИКАХ</Link>
          </li>
          <li>
            <Link to="/lyrics/#krasnayaPesnya">КРАСНАЯ ПЕСНЯ</Link>
          </li>
          <li>
            <Link to="/lyrics/#les">ЛЕС</Link>
          </li>
          <li>
            <Link to="/lyrics/#chernoknizhnica">ЧЕРНОКНИЖНИЦА</Link>
          </li>
          <li>
            <Link to="/lyrics/#terem">ТЕРЕМ</Link>
          </li>
          <li>
            <Link to="/lyrics/#gerbarij">ГЕРБАРИЙ</Link>
          </li>
          <li>
            <Link to="/lyrics/#vnutriGerbariya">ВНУТРИ ГЕРБАРИЯ</Link>
          </li>
          <li>
            <Link to="/lyrics/#teploBezdonnoe">ТЕПЛО БЕЗДОННОЕ</Link>
          </li>
          <li>
            <Link to="/lyrics/#malchikBatiskaf">МАЛЬЧИК&#x2010;БАТИСКАФ</Link>
          </li>
          <li>
            <Link to="/lyrics/#igrushki">ИГРУШКИ</Link>
          </li>
          <li>
            <Link to="/lyrics/#podrasti">ПОДРАСТИ</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TOC;
