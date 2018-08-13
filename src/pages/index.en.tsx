import * as React from "react";
import Countdown from "react-countdown-now";

import * as styles from "./index.module.scss";

const IndexEn: React.SFC = () => (
  <article className={styles.article}>
    <Countdown
      date="01 Sep 2018 20:00"
      renderer={({ days, hours, minutes }) => (
        <div className={styles.countdown}>
          <div className={styles.block}>
            <span className={styles.data}>{days}</span>
            <span className={styles.title}>{days > 1 ? "days" : "day"}</span>
          </div>
          <div className={styles.block}>
            <span className={styles.data}>{hours}</span>
            <span className={styles.title}>{hours > 1 ? "hours" : "hour"}</span>
          </div>
          <div className={styles.block}>
            <span className={styles.data}>{minutes}</span>
            <span className={styles.title}>
              {minutes > 1 ? "minutes" : "minute"}
            </span>
          </div>
        </div>
      )}
    />
  </article>
);

export default IndexEn;
