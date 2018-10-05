export interface IAbout {
  i18nMessages: II18nMessages;
  langKey: string;
}

export interface IData {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        fields: {
          langKey: string;
          slug: string;
        };
        frontmatter: {
          title: string;
        };
        id: string;
      };
    }>;
  };
  markdownRemark: {
    frontmatter: {
      title: string;
      type: string;
    };
    html: string;
  };
  site: {
    siteMetadata: {
      languages: {
        defaultLangKey: string;
        langs: Array<{ index: number; langKey: string; link: string }>;
      };
    };
  };
}

export interface II18nMessages {
  description: string;
  keywords: string[];
  pageNames: {
    about: string;
    donate: string;
    home: string;
    lyrics: string;
    news: string;
    photos: string;
    videos: string;
  };
  title: string;
}

export interface IIndex {
  data: IData;
}

export interface IIndexLayout {
  children?: any;
  data: IData;
  i18nMessages: II18nMessages;
  location: {
    pathname: string;
  };
}

export interface ILyrics {
  data: IData;
  i18nMessages: II18nMessages;
  langKey: string;
}

export interface IPhotos {
  i18nMessages: II18nMessages;
  langKey: string;
}

export interface ITemplate {
  data: IData;
  i18nMessages: II18nMessages;
  location: {
    pathname: string;
  };
}
