import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

function SelectLanguage(props) {
  const links = props.langs.map(lang => (
    <li key={lang.langKey}>
      <Link to={lang.link}>{lang.langKey}</Link>
    </li>
  ));

  return (
    <nav>
      <ul>{links}</ul>
    </nav>
  );
}

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
