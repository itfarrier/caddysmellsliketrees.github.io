import React from 'react';

const HTML = ({
    body,
    bodyAttributes,
    headComponents,
    htmlAttributes,
    postBodyComponents,
    preBodyComponents,
}) => (
    <html {...htmlAttributes}>
        <head>
            <meta charSet="utf-8" />
            <meta content="ie=edge" httpEquiv="x-ua-compatible" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            {headComponents}
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

export default HTML;
