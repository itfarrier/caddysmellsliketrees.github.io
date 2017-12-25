import Helmet from "react-helmet";
import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import React from "react";
import SnowStorm from "../components/Snowstorm";

import Sidebar from "../components/Sidebar";

import "../styles/index.scss";

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
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="194x194"
        href="/favicons/favicon-194x194.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#0a0a0a"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta
        name="apple-mobile-web-app-title"
        content={data.site.siteMetadata.title}
      />
      <meta name="application-name" content={data.site.siteMetadata.title} />
      <meta name="msapplication-TileColor" content="#f0f0f0" />
      <meta
        name="msapplication-TileImage"
        content="/favicons/mstile-144x144.png"
      />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#f0f0f0" />
    </Helmet>
    <MediaQuery query="(orientation: portrait)">
      <Sidebar width={"75vw"} />
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <Sidebar width={"50vw"} />
    </MediaQuery>
    <main>{children()}</main>
    <SnowStorm />
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
