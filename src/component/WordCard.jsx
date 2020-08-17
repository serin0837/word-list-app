import React from "react";

const WordCard = ({ word }) => {
  return (
    <section className="list__card">
      <h2>{word.name}</h2>
      <p>{word.meaning}</p>
      <p>{word.note}</p>
      <button>I know this word!</button>
    </section>
  );
};

export default WordCard;
