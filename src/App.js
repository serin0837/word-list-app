import React from "react";
import "./App.css";
import Title from "./component/Title";
import WordList from "./component/WordList";
import AsideMenu from "./component/AsideMenu";
import WordAdder from "./component/WordAdder";
import Footer from "./component/Footer";

// import {Switch, Route} from "./react-router-dom"
//try to use createContext to grap google ID
const user={
  googleId:undefined
}

const UserContext = React.createContext(user);

const App = () => {
  return (
    <UserContext.Provider>
      <div className="App">
      <Title />
      <AsideMenu />
      <main className="main">
        <WordAdder/>
        <WordList/>
      </main>
      <Footer />
    </div>
  </UserContext.Provider>
  );
};

export default App;

