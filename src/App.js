import React from "react";
import "./App.css";
import Title from "./component/Title";
import WordList from "./component/WordList";
import AsideMenu from "./component/AsideMenu";
import WordAdder from "./component/WordAdder";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Title />
      <AsideMenu />
      <WordAdder />
      <WordList />
      <Footer />
    </div>
  );
}

export default App;
