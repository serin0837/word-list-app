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
      { name: "하다", meaning: "do", note: "공부하다", remember: "false" },
      {
        name: "선생님",
        meaning: "teacher",
        note: "선생님<-> 학생",
        remember: "false",
      },
      {
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
  // setState always take function// currentState and return object (new state)
  render() {
    const { words } = this.state;
    return (
      <div className="App">
        <Title />
        <AsideMenu />
        <WordAdder addWord={this.addWord} />
        <WordList words={words} />
        <Footer />
      </div>
    );
  }
}

export default App;
