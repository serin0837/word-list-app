import React from "react";
import "./App.css";
import Title from "./component/Title";
import WordList from "./component/WordList";
import AsideMenu from "./component/AsideMenu";
import WordAdder from "./component/WordAdder";
import Footer from "./component/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
    };
    this.reloadState();
  }

  getResponse = async () => {
    try {
      const response = await fetch("http://localhost:5000/word");
      const listWord = await response.json();
      return { words: listWord };
    } catch (error) {
      console.log(error);
      return { error: "I can not get words😑" };
    }
  };

  reloadState = async () => {
    this.setState(await this.getResponse());
  };

  // state = {
  //   words: [],
  // words: [
  //   {
  //     id: 1,
  //     name: "하다",
  //     meaning: "do",
  //     note: "공부하다",
  //     remember: "false",
  //   },
  //   {
  //     id: 2,
  //     name: "선생님",
  //     meaning: "teacher",
  //     note: "선생님<-> 학생",
  //     remember: "false",
  //   },
  //   {
  //     id: 3,
  //     name: "학생",
  //     meaning: "student",
  //     note: "학생이 공부하다",
  //     remember: "false",
  //   },
  // ],
  // };
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
    let wordList = undefined;
    const { words } = this.state;
    if (this.state.error) {
      wordList = <h1>error found::{this.state.error}</h1>;
    } else {
      wordList = <WordList words={words} removeWord={this.removeWord} />;
    }
    return (
      <div className="App">
        <Title />
        <AsideMenu />
        <main className="main">
          <WordAdder addWord={this.addWord} />
          {wordList}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
