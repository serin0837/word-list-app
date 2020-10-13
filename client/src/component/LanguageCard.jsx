import React from "react";
import { Link } from "@reach/router";

const LanguageCard = ({ language }) => {
  return (
    <button className="aside-button">
      <Link to={language.language}>{language.language}</Link>
    </button>
  );
};

export default LanguageCard;
