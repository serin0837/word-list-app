import React from "react";

const WordCard = ({ word, removeWord }) => {
  const handleClick = (clickEvent) => {
    removeWord(word.id);
    //remove word of id{word.id} from dictionary
  };

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
