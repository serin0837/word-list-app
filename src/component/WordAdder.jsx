import axios from "axios";
import React from "react";

class WordAdder extends React.Component {
  state = {
    language:"",
    name: "",
    meaning: "",
    note: "",
    languages:[]
  };

  componentDidMount() {

    axios.get("https://word-back.herokuapp.com/api/languages/")
    .then(response=>{
      console.log(response.data)
      if(response.data.length>0){
            this.setState({
    languages: response.data.map(language=>language.language),
    language:response.data[0].language// I don't understand this part
    
    });

      }
    })
  }
  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const addWord ={
      language:this.state.language,
      name: this.state.name,
      meaning: this.state.meaning,
      note: this.state.note,
    }
    axios.post("https://word-back.herokuapp.com/api/words/",
    addWord)
   .then((response)=>{
     console.log("add word")
     window.location="/"
   })
    this.setState((currentState) => {
      return { language:"",
      name: "",
      meaning: "",
      note: "", };
    });

    
  };
  handleInput = (inputEvent) => {
    const {id,value} = inputEvent.target
    this.setState((currentState) => {
      return { [id]: value };
    });

  };
  render() {
    return (
      <section className="form">
        <form onSubmit={this.handleSubmit} className="form__card">
        <label className="label">
            Language:
            <select
              type="text"
              onChange={this.handleInput}
              id="language"
              value={this.state.language}
            >
            {this.state.languages.map((language)=>{
              return (
                <option key={language} value={language}>{language}</option>
              )
            })}
            </select>
          </label>
          <br/>
          <label className="label">
            Word:
            <input
              type="text"
              onChange={this.handleInput}
              id="name"
              value={this.state.name}
            ></input>
          </label>
          <br />
          <label className="label">
            Meaning:
            <input
              type="test"
              onChange={this.handleInput}
              id="meaning"
              value={this.state.meaning}
            ></input>
          </label>
          <br />
          <label className="label">
            Note:
            <input
              type="note"
              onChange={this.handleInput}
              id="note"
              value={this.state.note}
            ></input>
          </label>
          <br />
          <button>Add a word</button>
        </form>
      </section>
    );
  }
}

export default WordAdder;
