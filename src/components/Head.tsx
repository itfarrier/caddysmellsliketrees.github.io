import * as React from "react";
import Helmet from "react-helmet";

interface IHead {
  i18nMessages: {
    description: string;
    keywords: string[];
    pageNames: {
      about?: string;
      donate?: string;
      lyrics?: string;
      news?: string;
      videos?: string;
    };
    title: string;
  };
  page?: string;
  subPage?: string;
}

const Head: React.SFC<IHead> = ({
  i18nMessages: {
    description,
    keywords,
    pageNames: { videos },
    title
  },
  page,
  subPage
}) => {
  const variantOfPageTitle: string = subPage
    ? `${title} — ${description} — ${page} — ${subPage}`
    : page
      ? `${title} — ${description} — ${page}`
      : `${title} — ${description}`;

  function generateAndroidChrome(sizesInPx: number[]) {
    return sizesInPx.map(size => (
      <link
        href={`/favicons/android-chrome-${size}x${size}.png`}
        rel="icon"
        sizes={`${size}x${size}`}
        type="image/png"
      />
    ));
  }
  function generateAppleTouch(sizesInPx: number[]) {
    return sizesInPx.map(size => [
      <link
        href={`/favicons/apple-touch-icon-${size}x${size}.png`}
        key={`${size.index}${size}`}
        rel="apple-touch-icon"
        sizes={`${size}x${size}`}
        type="image/png"
      />,
      <link
        href={`/favicons/apple-touch-icon-${size}x${size}-precomposed.png`}
        key={`${size.index}${size}`}
        rel="apple-touch-icon"
        sizes={`${size}x${size}`}
        type="image/png"
      />
    ]);
  }

  return (
    <Helmet
      meta={[
        { name: "description", content: description },
        { name: "keywords", content: keywords }
      ]}
      title={variantOfPageTitle}
    >
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
      <meta content={title} name="apple-mobile-web-app-title" />
      <meta content={title} name="application-name" />
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
  );
};

export default Head;
