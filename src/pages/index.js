import React from "react";

import styles from "./index.module.scss";

const Index = () => (
  <div className={styles.logoCentering}>
    <div className={styles.fullLogo}>
      <div className={styles.imgLogoUpperOrLeft}>
        <img
          alt="Дерево"
          className={styles.imgLogoTreeUpperOrLeft}
          src="/vectors/tree.svg"
        />
        <div title="Луч" className={styles.imgLogoLineUpperOrLeft} />
      </div>
      <div className={styles.textLogo}>
        <div className={styles.textLogoCaddy}>КЭДДИ</div>
        <div className={styles.textLogoSmells}>ПАХНЕТ</div>
        <div className={styles.textLogoLikeTrees}>ДЕРЕВЬЯМИ</div>
      </div>
      <div className={styles.imgLogoLowerOrRight}>
        <img
          alt="Скрытое дерево"
          className={styles.imgLogoTreeLowerOrRight}
          src="/vectors/tree.svg"
        />
        <div title="Луч" className={styles.imgLogoLineLowerOrRight} />
      </div>
    </div>
  </div>
);

export default Index;
