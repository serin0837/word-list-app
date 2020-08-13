import React from "react";
import "./App.css";
import Title from "./component/Title";
import WordList from "./component/WordList";
import AsideMenu from "./component/AsideMenu";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <AsideMenu></AsideMenu>
      <WordList></WordList>
    </div>
  );
}

export default App;
