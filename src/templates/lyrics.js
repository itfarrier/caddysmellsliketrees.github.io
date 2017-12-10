import PropTypes from "prop-types";
import React from "react";

const lyricsTemplate = ({ data }) => {
  const lyrics = data.markdownRemark;
  return (
    <div className="main lyrics">
      <div dangerouslySetInnerHTML={{ __html: lyrics.html }} />
    </div>
  );
};

export const lyricsTemplateQuery = graphql`
  query lyricsTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;

lyricsTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default lyricsTemplate;
