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
    // this.reloadState();
  }

  // sendWordServer = async (newWord) => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/words", {
  //       method: "post",
  //       body: JSON.stringify(newWord),
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     });
  //     const addedWord = await response.json();
  //     return addedWord;
  //   } catch (error) {
  //     //not catch error
  //     console.log(error);
  //     return { error: "I can not post a word😑" };
  //   }
  // };

  // addWord = async (newWord) => {
  //   try {
  //     const addedWord = await this.sendWordServer(newWord);
  //     this.setState((currentState) => {
  //       return { words: [addedWord, ...currentState.words] };
  //     });
  //   } catch (error) {}
  // };

  // deleteWordFromServer = async (wordId) => {
  //   try {
  //     const response = await fetch("http://localhost:5000/word", {
  //       method: "delete",
  //       body: JSON.stringify({ id: wordId }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getResponse = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/word");
  //     const listWord = await response.json();
  //     return { words: listWord };
  //   } catch (error) {
  //     console.log(error);
  //     return { error: "I can not get words😑" };
  //   }
  // };

  // reloadState = async () => {
  //   this.setState(await this.getResponse());
  // };

  // removeWord = async (wordId) => {
  //   await this.deleteWordFromServer(wordId);
  //   await this.reloadState();
  //   // this.setState((currentState) => {
  //   //   return {
  //   //     words: currentState.words.filter((currentword) => {
  //   //       return currentword.id !== wordId;
  //   //     }),
  //   //   };
  //   // });


  //why not?
  // setState always take function// currentState and return object (new state)
  render() {
    // let wordList = undefined;
    // const { words } = this.state;
    // if (this.state.error) {
    //   wordList = <h1>error found::{this.state.error}</h1>;
    // } else {
    //   wordList = <WordList words={words} removeWord={this.removeWord} />;
    // }
    return (
      <div className="App">
        <Title />
        <AsideMenu />
        <main className="main">
          <WordAdder/>
          <WordList/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
