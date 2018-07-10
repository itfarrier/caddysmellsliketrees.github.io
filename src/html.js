import React from "react";

let stylesStr;

if (process.env.NODE_ENV === "production") {
  try {
    stylesStr = require("!raw-loader!../public/styles.css");
  } catch (error) {
    console.log(error);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;

    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            id="___gatsby"
            key={"body"}
            style={{
              display: "flex",
              minHeight: "100vh",
              flexDirection: "column"
            }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
