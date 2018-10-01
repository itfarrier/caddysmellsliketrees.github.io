import * as React from "react";

import Head from "../components/Head";

import * as styles from "./photos.module.scss";

interface IStoreRu {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      photos: string;
    };
    title: string;
  };
}

const PhotosRu: React.SFC<IStoreRu> = ({
  i18nMessages,
  i18nMessages: {
    description,
    keywords,
    pageNames: { photos }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={photos} />
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

export default PhotosRu;
