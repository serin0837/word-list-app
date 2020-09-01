import React from "react";
import { Link } from "@reach/router";

const LanguageCard = ({ language }) => {
  return (
    <button className="aside-button">
      <Link to={language.name}>{language.name}</Link>
    </button>
  );
};

export default LanguageCard;
