import PropTypes from "prop-types";
import React from "react";

const stylesStr =
  process.env.NODE_ENV === "production"
    ? () => {
        try {
          require("!raw-loader!../public/styles.css");
        } catch (e) {
          console.log(e);
        }
      }
    : null;

class HTML extends React.Component {
  render() {
    const css =
      process.env.NODE_ENV === "production" ? (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      ) : null;
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
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
