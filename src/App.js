import React from "react";
import "./App.css";
import Title from "./component/Title";
import Wordlist from "./component/Wordlist";
import AsideMenu from "./component/AsideMenu";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <AsideMenu></AsideMenu>
      <Wordlist></Wordlist>
    </div>
  );
}

export default App;
