import React, { Component } from "react";
import LanguageCard from "./LanguageCard";
import LanguageAdder from "./LanguageAdder";
import axios from "axios"

class AsideMenu extends Component {
  state = {
    languages: [],
  };

  componentDidMount() {

    axios.get("https://word-back.herokuapp.com/api/languages/")
    .then(({data})=>{
      console.log(data)
      this.setState({languages:data})
    })
  } 


  render() {
    const { languages} = this.state;
    return (
      <aside className="aside">
        <header>
          <span className="closeBtn">&times;</span>
          <h2>
            <span>🖋</span> Languages
          </h2>
        </header>
        <div>
          {languages.map((language) => {
            return <LanguageCard language={language} key={language._id} />;
          })}
          <LanguageAdder />
        </div>
      </aside>
    );
  }
}

export default AsideMenu;
