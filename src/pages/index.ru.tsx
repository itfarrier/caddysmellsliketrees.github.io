import * as React from "react";
import Countdown from "react-countdown-now";

import * as styles from "./index.module.scss";

const IndexRu: React.SFC = () => (
  <article className={styles.article}>
    <Countdown
      date="01 Sep 2018 20:00"
      renderer={({ days, hours, minutes }) => {
        function declOfNum(time: number, titles: string[]) {
          const cases = [2, 0, 1, 1, 1, 2];

          return titles[
            time % 100 > 4 && time % 100 < 20
              ? 2
              : cases[time % 10 < 5 ? time % 10 : 5]
          ];
        }

        return (
          <div className={styles.countdown}>
            <div className={styles.block}>
              <span className={styles.data}>{days}</span>
              <span className={styles.title}>
                {declOfNum(days, ["день", "дня", "дней"])}
              </span>
            </div>
            <div className={styles.block}>
              <span className={styles.data}>{hours}</span>
              <span className={styles.title}>
                {declOfNum(hours, ["час", "часа", "часов"])}
              </span>
            </div>
            <div className={styles.block}>
              <span className={styles.data}>{minutes}</span>
              <span className={styles.title}>
                {declOfNum(minutes, ["минута", "минуты", "минут"])}
              </span>
            </div>
          </div>
        );
      }}
    />
  </article>
);

export default IndexRu;
