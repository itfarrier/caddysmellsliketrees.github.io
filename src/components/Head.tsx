import * as React from 'react';
import Helmet from 'react-helmet';

import { IHead } from '../interfaces';

const Head: React.SFC<IHead> = ({
    currentLanguage,
    i18nMessages: { description, keywords, title },
    page,
    subPage,
}) => {
    const generateAndroidChrome = (sizesInPx: number[]) => {
        return sizesInPx.map((size) => (
            <link
                href={`/favicons/android-chrome-${size}x${size}.png`}
                key={size}
                rel="icon"
                sizes={`${size}x${size}`}
                type="image/png"
            />
        ));
    };
    const generateAppleTouch = (sizesInPx: number[]) => {
        return sizesInPx.map((size) => [
            <link
                href={`/favicons/apple-touch-icon-${size}x${size}.png`}
                key={`1${size}`}
                rel="apple-touch-icon"
                sizes={`${size}x${size}`}
                type="image/png"
            />,
            <link
                href={`/favicons/apple-touch-icon-${size}x${size}-precomposed.png`}
                key={`2${size}`}
                rel="apple-touch-icon"
                sizes={`${size}x${size}`}
                type="image/png"
            />,
        ]);
    };
    const generateFavicon = (sizesInPx: number[]) => {
        return sizesInPx.map((size) => (
            <link
                href={`/favicons/favicon-${size}x${size}.png`}
                key={size}
                rel="icon"
                sizes={`${size}x${size}`}
                type="image/png"
            />
        ));
    };
    const variantOfPageTitle: string = subPage
        ? `${title} — ${description} — ${page} — ${subPage}`
        : page
            ? `${title} — ${description} — ${page}`
            : `${title} — ${description}`;
    const keywordsString: string = keywords.toString();

    return (
        <Helmet title={variantOfPageTitle}>
            <html lang={currentLanguage} />
            {generateAndroidChrome([36, 48, 72, 96, 144, 192, 256, 384, 512])}
            <link
                href="/favicons/apple-touch-icon.png"
                rel="apple-touch-icon"
                sizes="180x180"
                type="image/png"
            />
            <link
                href="/favicons/apple-touch-icon-precomposed.png"
                rel="apple-touch-icon"
                sizes="180x180"
                type="image/png"
            />
            {generateAppleTouch([57, 60, 72, 76, 114, 120, 144, 152, 180])}
            {generateFavicon([16, 32, 194])}
            <link color="#0a0a0a" href="/favicons/safari-pinned-tab.svg" rel="mask-icon" />
            <link href="/favicons/favicon.ico" rel="shortcut icon" />
            <meta content={description} name="description" />
            <meta content={keywordsString} name="keywords" />
            <meta content={title} name="apple-mobile-web-app-title" />
            <meta content={title} name="application-name" />
            <meta content="#f0f0f0" name="msapplication-TileColor" />
            <meta content="/favicons/mstile-144x144.png" name="msapplication-TileImage" />
            <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
            <meta content="#f0f0f0" name="theme-color" />
            <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        </Helmet>
    );
};

export default Head;
