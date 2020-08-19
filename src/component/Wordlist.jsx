import React from "react";
import WordCard from "./WordCard";

const WordList = ({ words, removeWord }) => {
  return (
    <section>
      {words.map((word) => {
        return <WordCard word={word} key={word.name} removeWord={removeWord} />;
      })}
    </section>
  );
};

export default WordList;
