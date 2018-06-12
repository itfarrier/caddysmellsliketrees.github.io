import * as React from "react";

interface LyricsTemplateProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const LyricsTemplate: React.SFC<LyricsTemplateProps> = ({
  data: {
    markdownRemark: { html }
  }
}) => <article dangerouslySetInnerHTML={{ __html: html }} />;

export const LyricsTemplateQuery = graphql`
  query lyricsTemplateQuery($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
    }
  }
`;

export default LyricsTemplate;
