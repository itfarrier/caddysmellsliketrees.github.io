import PropTypes from "prop-types";
import React from "react";

import styles from "./lyricsTemplate.module.css";

const lyricsTemplate = ({ data }) => {
  const lyrics = data.markdownRemark;
  return (
    <div className="container">
      <div className="row">
        <div className={"col " + styles.lyrics}>
          <div dangerouslySetInnerHTML={{ __html: lyrics.html }} />
        </div>
      </div>
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
