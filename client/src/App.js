import React from "react";
import "./App.css";
import Title from "./component/Title";
import WordList from "./component/WordList";
import AsideMenu from "./component/AsideMenu";
import WordAdder from "./component/WordAdder";
import Footer from "./component/Footer";

class App extends React.Component {
  render() {
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
