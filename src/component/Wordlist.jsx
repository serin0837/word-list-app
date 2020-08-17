import React from "react";
import WordCard from "./WordCard";

const WordList = ({ words }) => {
  return (
    <main className="main">
      {words.map((word) => {
        return <WordCard word={word} key={word.name} />;
      })}
    </main>
  );
};

export default WordList;
