import React from 'react';

let stylesStr;

if (process.env.NODE_ENV === 'production') {
    try {
        stylesStr = require('!raw-loader!../public/styles.css');
    } catch (error) {
        console.log(error);
    }
}

const HTML = (props) => {
    const {
        body,
        bodyAttributes,
        headComponents,
        htmlAttributes,
        postBodyComponents,
        preBodyComponents,
    } = props;

    let css;

    if (process.env.NODE_ENV === 'production') {
        css = <style dangerouslySetInnerHTML={{ __html: stylesStr }} id="gatsby-inlined-css" />;
    }

    return (
        <html {...htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta content="ie=edge" httpEquiv="x-ua-compatible" />
                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
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
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }}
                />
                {postBodyComponents}
            </body>
        </html>
    );
};

export default HTML;
