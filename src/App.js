import React from "react";
import "./App.css";
import Title from "./component/Title";
import WordList from "./component/WordList";
import AsideMenu from "./component/AsideMenu";
import WordAdder from "./component/WordAdder";
import Footer from "./component/Footer";

class App extends React.Component {
  state = {
    words: [
      {
        id: 1,
        name: "하다",
        meaning: "do",
        note: "공부하다",
        remember: "false",
      },
      {
        id: 2,
        name: "선생님",
        meaning: "teacher",
        note: "선생님<-> 학생",
        remember: "false",
      },
      {
        id: 3,
        name: "학생",
        meaning: "student",
        note: "학생이 공부하다",
        remember: "false",
      },
    ],
  };
  addWord = (nword) => {
    this.setState((currentState) => {
      return { words: [nword, ...currentState.words] };
    });
  };

  removeWord = (wordid) => {
    this.setState((currentState) => {
      return {
        words: currentState.words.filter((currentword) => {
          return currentword.id !== wordid;
        }),
      };
    });
  };

  // knowWord =(word)=>{
  //   this.setState((currentState)=>{
  //     return {word.remember=== "true"}
  //   })
  // }

  //why not?
  // setState always take function// currentState and return object (new state)
  render() {
    const { words } = this.state;
    return (
      <div className="App">
        <Title />
        <AsideMenu />
        <main className="main">
          <WordAdder addWord={this.addWord} />
          <WordList words={words} removeWord={this.removeWord} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
