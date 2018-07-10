import * as React from "react";

import Head from "../components/Head";

import * as styles from "./about.module.scss";

interface IAboutEn {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      about: string;
    };
    title: string;
  };
}

const AboutEn: React.SFC<IAboutEn> = ({
  i18nMessages,
  i18nMessages: {
    pageNames: { about }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={about} />
    <article className={styles.article}>
      <section className={styles.section}>
        <h1 className={styles.h1}>
          This band&thinsp;&mdash;&thinsp;our wooden frame
        </h1>
        <p className={styles.p}>
          В&nbsp;феврале 2015&#8208;го упали наши зёрна в&nbsp;неведомую землю,
          а&nbsp;к&nbsp;октябрю появились первые ростки. Плодами
          мы&nbsp;зацветаем медленно, но&nbsp;наши ветви крепнут
          и&nbsp;наливаются соком всё гуще и&nbsp;пряней!
        </p>
        <p className={styles.p}>
          Мы&nbsp;играем душеполезные песни на&nbsp;каждый день. Они у&nbsp;нас
          срастаются в&nbsp;леса так, что их&nbsp;тяжело отделить друг
          от&nbsp;друга, а&nbsp;между ними бликуют смелыми оленями стихи.
        </p>
      </section>
      <section className={styles.section}>
        <h1 className={styles.h1}>Members:</h1>
        <ul className={styles.ul}>
          <li>
            Andrej Shvetsov<br />(ударные, вейв&#8208;драм, перкуссия)
          </li>
          <li>
            Vadim Kolevatov<br />(ударные)
          </li>
          <li>
            Vladislav Lutsyk<br />(аккордеон, духовые, вокал, бэк&#8208;вокал)
          </li>
          <li>
            Dmitrij Vavilov<br />(укулеле, перкуссия, декламация стихов)
          </li>
          <li>
            Svetlana Podabed<br />(духовые, гитара, вокал, бэк&#8208;вокал,
            декламация стихов, перкуссия)
          </li>
          <li>
            Sergej Nefed'ev<br />(гитара, вокал, бэк&#8208;вокал, перкуссия)
          </li>
          <li>
            Sergej Cvetkov<br />(бас&#8208;гитара, декламация стихов)
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h1 className={styles.h1}>
          <a className={styles.a} href="/documents/technicalRider.pdf">
            <span className={styles.span}>Technical rider</span>
            <img
              alt="PDF logo"
              className={styles.pdfImg}
              src="/vectors/filePdf.svg"
            />
          </a>
        </h1>
      </section>
    </article>
  </React.Fragment>
);

export default AboutEn;
