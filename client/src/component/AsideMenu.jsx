import React, { Component } from "react";
import LanguageCard from "./LanguageCard";
import LanguageAdder from "./LanguageAdder";
import axios from "axios"

class AsideMenu extends Component {
  constructor(props){
    super(props)
    this.removeLanguage=this.removeLanguage.bind(this)
  this.state = {
    languages: [],
    selectedLanguage:"",
  }
  };

  componentDidMount() {

    axios.get("https://word-back.herokuapp.com/api/languages/")
    .then(({data})=>{
      console.log(data)
      this.setState({languages:data})
    })
  } 

  removeLanguage(id){
    axios.delete("https://word-back.herokuapp.com/api/languages/"+id)
    .then(res=>{console.log(res.data)})

    this.setState({
      languages:this.state.languages.filter(language=>language._id!==id)//after bind it's working
      
    })
  }


  select
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
