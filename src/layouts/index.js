import Helmet from "react-helmet";
import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import React from "react";

import Sidebar from "../components/Sidebar";

import "../styles/index.scss";
import appleTouchIcon from "../static/favicons/apple-touch-icon.png";
import favicon32 from "../static/favicons/favicon-32x32.png";
import favicon194 from "../static/favicons/favicon-194x194.png";
import androidChrome192 from "../static/favicons/android-chrome-192x192.png";
import favicon16 from "../static/favicons/favicon-16x16.png";
import safariPinnedTab from "../static/favicons/safari-pinned-tab.svg";
import mstile from "../static/favicons/mstile-144x144.png";

const indexLayout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>
        {data.site.siteMetadata.title +
          " — " +
          data.site.siteMetadata.description}
      </title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content="sample, something" />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="194x194" href={favicon194} />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={androidChrome192}
      />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={safariPinnedTab} color="#0a0a0a" />
      <meta name="msapplication-TileColor" content="#f0f0f0" />
      <meta name="msapplication-TileImage" content={mstile} />
      <meta name="theme-color" content="#f0f0f0" />
    </Helmet>
    <MediaQuery query="(orientation: portrait)">
      <Sidebar width={"75vw"} />
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <Sidebar width={"50vw"} />
    </MediaQuery>
    <main>{children()}</main>
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
