import Helmet from "react-helmet";
import isMobile from "ismobilejs";
import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import React from "react";
// import SnowStorm from "../components/Snowstorm";

import Sidebar from "../components/Sidebar";

import "../styles/index.scss";
import styles from "./index.module.scss";

const indexLayout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>
        {data.site.siteMetadata.title +
          " — " +
          data.site.siteMetadata.description}
      </title>
      <meta content={data.site.siteMetadata.description} name="description" />
      <meta charSet="utf-8" />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href={data.site.siteMetadata.siteUrl} rel="canonical" />
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
        type="image/png"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-194x194.png"
        rel="icon"
        sizes="194x194"
        type="image/png"
      />
      <link
        href="/favicons/android-chrome-192x192.png"
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        color="#0a0a0a"
        href="/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <meta
        content={data.site.siteMetadata.title}
        name="apple-mobile-web-app-title"
      />
      <meta content={data.site.siteMetadata.title} name="application-name" />
      <meta content="#f0f0f0" name="msapplication-TileColor" />
      <meta
        content="/favicons/mstile-144x144.png"
        name="msapplication-TileImage"
      />
      <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
      <meta content="#f0f0f0" name="theme-color" />
      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
    </Helmet>
    <MediaQuery orientation="portrait">
      <Sidebar width="75vw" />
    </MediaQuery>
    <MediaQuery orientation="landscape">
      <Sidebar width="50vw" />
    </MediaQuery>
    {isMobile.any ? (
      <main role="main">{children()}</main>
    ) : (
      <main className={styles.desktop} role="main">
        {children()}
      </main>
    )}
    {/*<SnowStorm />*/}
  </div>
);

indexLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export const indexLayoutQuery = graphql`
  query indexLayoutQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`;

export default indexLayout;
