import PropTypes from "prop-types";
import React from "react";

const stylesStr =
  process.env.NODE_ENV === "production"
    ? () => {
        try {
          require("!raw-loader!../public/styles.css");
        } catch (error) {
          console.log(error);
        }
      }
    : null;

class HTML extends React.Component {
  render() {
    const {
      body,
      bodyAttributes,
      headComponents,
      htmlAttributes,
      postBodyComponents,
      preBodyComponents
    } = this.props;

    const css =
      process.env.NODE_ENV === "production" ? (
        <style
          dangerouslySetInnerHTML={{ __html: stylesStr }}
          id="gatsby-inlined-css"
        />
      ) : null;

    return (
      <html {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          <meta
            content="width=device-width, initial-scale=1, viewport-fit=cover"
            name="viewport"
          />
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
          <meta content="#f0f0f0" name="msapplication-TileColor" />
          <meta
            content="/favicons/mstile-144x144.png"
            name="msapplication-TileImage"
          />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta content="#f0f0f0" name="theme-color" />
          <meta
            content="black-translucent"
            name="apple-mobile-web-app-status-bar-style"
          />
          {headComponents}
          {css}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: body }}
            id="___gatsby"
            key="body"
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  body: PropTypes.string.isRequired,
  bodyAttributes: PropTypes.array,
  headComponents: PropTypes.array.isRequired,
  htmlAttributes: PropTypes.string,
  postBodyComponents: PropTypes.array.isRequired,
  preBodyComponents: PropTypes.array.isRequired
};

export default HTML;
