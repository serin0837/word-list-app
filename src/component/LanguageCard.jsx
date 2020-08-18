import React from "react";

const LanguageCard = ({ language }) => {
  return <button className="aside-button">{language.name}</button>;
};

export default LanguageCard;
