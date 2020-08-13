import React, { Component } from "react";
import WordCard from "./WordCard";

class WordList extends Component {
  state = {
    words: {
      하다: { meaning: "do", note: "공부하다", know: "false" },
      선생님: {
        meaning: "teacher",
        note: "선생님<-> 학생",
        know: "false",
      },
      학생: {
        meaning: "student",
        note: "학생이 공부하다",
        know: "false",
      },
    },
  };
  render() {
    const wordArray = Object.entries(this.state.words);
    return (
      <main>
        {wordArray.map(([wordName, data]) => {
          return <WordCard key={wordName} wordName={wordName} data={data} />;
        })}
      </main>

      //destructure of array word ->[wordName,data]
    );
  }
}

export default WordList;
