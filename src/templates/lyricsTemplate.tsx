import * as React from "react";

const lyricsTemplate = props => (
  <article
    dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
  />
);

export const lyricsTemplateQuery = graphql`
  query lyricsTemplateQuery($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
    }
  }
`;

export default lyricsTemplate;
