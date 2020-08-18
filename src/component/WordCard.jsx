import React from "react";

const WordCard = ({ word }) => {
  const handleClick = (clickEvent) => {};

  return (
    <section className="list__card">
      <h2>{word.name}</h2>
      <p>{word.meaning}</p>
      <p>{word.note}</p>
      <button onClick={handleClick} value={word.remember} id="remember">
        I know this word!
      </button>
    </section>
  );
};

export default WordCard;
