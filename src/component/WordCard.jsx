import React from "react";

const WordCard = ({ wordName, data, know }) => {
  const handleClick = (event) => {
    const knowWord = event.target.name;
    know(knowWord);
  };
  return (
    <section className="list__card">
      <h2>{wordName}</h2>
      <p>{data.meaning}</p>
      <p>{data.note}</p>
      <button onClick={handleClick} name={wordName}>
        I know this word!
      </button>
    </section>
  );
};

export default WordCard;
