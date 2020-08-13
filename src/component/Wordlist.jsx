import React, { Component } from "react";
import WordCard from "./WordCard";

class WordList extends Component {
  state = {
    words: {
      하다: { meaning: "do", note: "공부하다", remember: "false" },
      선생님: {
        meaning: "teacher",
        note: "선생님<-> 학생",
        remember: "false",
      },
      학생: {
        meaning: "student",
        note: "학생이 공부하다",
        remember: "false",
      },
    },
  };
  render() {
    const wordArray = Object.entries(this.state.words);
    return (
      <main className="main">
        {wordArray.map(([wordName, data]) => {
          return (
            <WordCard
              key={wordName}
              wordName={wordName}
              data={data}
              know={this.know}
            />
          );
        })}
      </main>

      //destructure of array word ->[wordName,data]
    );
  }
  know = (knowWord) => {
    console.log(this.state);
    this.setState((current) => {
      return {
        words: {
          ...current.words,
          [knowWord]: { ...current.words[knowWord], remember: "true" },
        },
      };
    });
  };
}

export default WordList;
