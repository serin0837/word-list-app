import React, { Component } from "react";
import LanguageCard from "./LanguageCard";
import LanguageAdder from "./LanguageAdder";
import axios from "axios"

class AsideMenu extends Component {
  state = {
    languages: [],
    selectedLanguage: ""
  }
  componentDidMount() {
    axios.get("https://word-back.herokuapp.com/api/languages/")
    .then(({data})=>{
      this.setState({languages:data})
    })
  } 

  removeLanguage = (id) => {
    axios.delete("https://word-back.herokuapp.com/api/languages/"+id)
    .then(res => {
      this.setState({
      languages:this.state.languages.filter(language => language._id !== id)
      })
    })
  }
  render() {
    const { languages} = this.state;
    return (
      <aside className="aside">
        <header>
          <h2>
            <span>🖋</span> Languages
          </h2>
        </header>
        <div>
          {languages.map((language) => {
            return <LanguageCard language={language} key={language._id} removeLanguage={this.removeLanguage} chooseLanguage={this.chooseLanguage}/>;
          })}
          <LanguageAdder />
        </div>
      </aside>
    );
  }
}

export default AsideMenu;
