import React,{useState} from "react";
import "./App.css";
import Title from "./component/Title";
import WordList from "./component/WordList";
import AsideMenu from "./component/AsideMenu";
import WordAdder from "./component/WordAdder";
import Footer from "./component/Footer";
import auth from "./auth";

const App = () => {
  let [googleId,setGoogleId] = useState(auth.googleId)
  let [givenName,setGivenName] = useState(auth.givenName)
  auth.setListener((id,name)=>{
    setGoogleId(id)
    setGivenName(name)
  })
  if(givenName === null){
    givenName = "Guest"
  }
  return (
      <div className="App">
      <Title />
      <AsideMenu />
      <main className="main">
        <h2>Welcome {givenName}!</h2>
        <p>Add new words that you want to remember!</p>
        {givenName==="Guest"&&(<p>Login if you want save your own words.</p>)}
        <WordAdder googleId = {googleId}/>
        <WordList googleId = {googleId}/>
      </main>
      <Footer />
    </div>
  );
};

export default App;

