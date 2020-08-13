import React from "react";

const WordCard = ({ wordName, data }) => {
  const handleClick = (clickE) => {
    console.log("click");
  };
  return (
    <section className="list__card">
      <h2>{wordName}</h2>
      <p>{data.meaning}</p>
      <p>{data.note}</p>
      <button onClick={handleClick}>I know this word!</button>
    </section>
  );
};

export default WordCard;
