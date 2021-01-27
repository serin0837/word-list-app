import React from "react";

const LanguageCard = ({ language, removeLanguage }) => {
  const handleClick = (clickEvent) => {
    removeLanguage(language._id)
  }
  return (
    <div>
      <button className="aside-button">
        {language.language}
      </button>
      <span onClick = {handleClick} className="closeBtn">&times;</span>
    </div>
  );
};

export default LanguageCard;
