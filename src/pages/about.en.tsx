import * as React from "react";

import Head from "../components/Head";

interface AboutEnProps {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      about: string;
    };
    title: string;
  };
}

const AboutEn: React.SFC<AboutEnProps> = ({
  i18nMessages,
  i18nMessages: {
    pageNames: { about }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={about} />
    <h1>{about}</h1>
    <article>
      <section>
        <h1>This band&thinsp;&mdash;&thinsp;our wooden frame</h1>
        <p>
          В&nbsp;феврале 2015&#8208;го упали наши зёрна в&nbsp;неведомую землю,
          а&nbsp;к&nbsp;октябрю появились первые ростки. Плодами
          мы&nbsp;зацветаем медленно, но&nbsp;наши ветви крепнут
          и&nbsp;наливаются соком всё гуще и&nbsp;пряней!
        </p>
        <p>
          Мы&nbsp;играем душеполезные песни на&nbsp;каждый день. Они у&nbsp;нас
          срастаются в&nbsp;леса так, что их&nbsp;тяжело отделить друг
          от&nbsp;друга, а&nbsp;между ними бликуют смелыми оленями стихи.
        </p>
      </section>
      <section>
        <h1>Состав:</h1>
        <ul>
          <li>
            Андрей Швецов<br />(ударные, вейв&#8208;драм, перкуссия)
          </li>
          <li>
            Вадим Колеватов<br />(ударные)
          </li>
          <li>
            Владислав Луцык<br />(аккордеон, духовые, вокал, бэк&#8208;вокал)
          </li>
          <li>
            Дмитрий Вавилов<br />(укулеле, перкуссия, декламация стихов)
          </li>
          <li>
            Светлана Подабед<br />(духовые, гитара, вокал, бэк&#8208;вокал,
            декламация стихов, перкуссия)
          </li>
          <li>
            Сергей Нефедьев<br />(гитара, вокал, бэк&#8208;вокал, перкуссия)
          </li>
          <li>
            Сергей Цветков<br />(бас&#8208;гитара, декламация стихов)
          </li>
        </ul>
      </section>
      <section>
        <h1>
          <a href="/documents/technicalRider.pdf">
            <span>ТЕХНИЧЕСКИЙ РАЙДЕР</span>
            <img alt="PDF logo" src="/vectors/file-pdf.svg" />
          </a>
        </h1>
      </section>
    </article>
  </React.Fragment>
);

export default AboutEn;
