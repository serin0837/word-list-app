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

  sendWordServer = async (nWord) => {
    try {
      const response = await fetch("http://localhost:5000/word", {
        method: "post",
        body: JSON.stringify(nWord),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const addedWord = await response.json();
      return addedWord;
    } catch (error) {
      console.log(error);
      return { error: "I can not post a word😑" };
    }
  };

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

  addWord = async (nword) => {
    try {
      const addedWord = await this.sendWordServer(nword);
      this.setState((currentState) => {
        return { words: [addedWord, ...currentState.words] };
      });
    } catch (error) {}
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
