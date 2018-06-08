import * as React from "react";
import { getUserLangKey } from "ptz-i18n";
import { withPrefix } from "gatsby-link";

interface IndexProps {
  data: {
    site: {
      siteMetadata: { languages: { defaultLangKey: string; langs: string[] } };
    };
  };
}

class Index extends React.PureComponent<IndexProps, {}> {
  constructor(props: IndexProps, context: any) {
    super(props, context);

    if (typeof window !== "undefined") {
      const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);

      window.___history.replace(homeUrl);
    }
  }

  public render() {
    return <div />;
  }
}

export const IndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;

export default Index;
