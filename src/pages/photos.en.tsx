import * as React from "react";

import Head from "../components/Head";

import * as styles from "./photos.module.scss";

import { IPhotos } from "../interfaces";

const PhotosEn: React.SFC<IPhotos> = ({
  i18nMessages,
  i18nMessages: {
    description,
    keywords,
    pageNames: { photos }
  },
  langKey
}) => (
  <React.Fragment>
    <Head currentLanguage={langKey} i18nMessages={i18nMessages} page={photos} />
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

export default PhotosEn;
