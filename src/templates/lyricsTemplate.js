import isMobile from "ismobilejs";
import PropTypes from "prop-types";
import React from "react";

import Footer from "../components/Footer";
import styles from "./lyricsTemplate.module.css";

const lyricsTemplate = ({ data }) => {
  const lyrics = data.markdownRemark;
  return (
    <div>
      <div className="container">
        <div className="row">
          {isMobile.any ? (
            <article
              className={"col-8 offset-2 " + styles.lyrics}
              dangerouslySetInnerHTML={{ __html: lyrics.html }}
            />
          ) : (
            <article
              className={"col-4 offset-4 " + styles.lyricsDesktop}
              dangerouslySetInnerHTML={{ __html: lyrics.html }}
            />
          )}
        </div>
      </div>
      <Footer />
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
