import * as React from "react";

interface TemplateProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

const Template: React.SFC<TemplateProps> = ({
  data: {
    markdownRemark: { html }
  }
}) => <article dangerouslySetInnerHTML={{ __html: html }} />;

export const TemplateQuery = graphql`
  query TemplateQuery($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
    }
  }
`;

export default Template;
