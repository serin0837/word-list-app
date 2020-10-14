import React from "react";

const WordCard = ({ word, removeWord }) => {
  const handleClick = (clickEvent) => {
    removeWord(word._id);
  };

  return (
    <section className="list__card">
      <p>word: {word.name}</p>
      <p>meaning: {word.meaning}</p>
      <p>note: {word.note}</p>
      <button onClick={handleClick} id={word._id}>
        I know this word!
      </button>
    </section>
  );
};

export default WordCard;
