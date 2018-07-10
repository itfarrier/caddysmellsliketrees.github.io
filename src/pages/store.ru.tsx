import * as React from "react";

import Head from "../components/Head";

import * as styles from "./store.module.scss";

interface IStoreRu {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      store: string;
    };
    title: string;
  };
}

const StoreRu: React.SFC<IStoreRu> = ({
  i18nMessages,
  i18nMessages: {
    description,
    keywords,
    pageNames: { store }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={store} />
    <div className={styles.div}>
      <div className={styles.item}>
        <div className={styles.title} />
      </div>
      <div className={styles.item}>
        <div className={styles.title} />
      </div>
      <div className={styles.item}>
        <div className={styles.title} />
      </div>
      <div className={styles.item}>
        <div className={styles.title} />
      </div>
    </div>
  </React.Fragment>
);

export default StoreRu;
