import Link from "gatsby-link";
import * as React from "react";

import Head from "../components/Head";

interface IStoreEn {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      store: string;
    };
    title: string;
  };
}

const StoreEn: React.SFC<IStoreEn> = ({
  i18nMessages,
  i18nMessages: {
    description,
    keywords,
    pageNames: { store }
  }
}) => (
  <React.Fragment>
    <Head i18nMessages={i18nMessages} page={store} />
    <h1>{store}</h1>
    <Link to="/en/">Back to the index page</Link>
  </React.Fragment>
);

export default StoreEn;
