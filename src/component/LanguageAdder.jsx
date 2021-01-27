import React, { Component } from "react";
import axios from "axios"

class LanguageAdder extends Component {
  state = {
    language: "",
  };

  
  handleInput = (inputEvent) => {
    const value = inputEvent.target.value;
    this.setState({language: value });
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const language = {
      language: this.state.language
    }
    axios.post("https://word-back.herokuapp.com/api/languages/", language)
    .then((res)=>console.log(res.data))
    this.setState({
      language: "",
    });
    window.location = "/"
  };

  render() {
    return (
      <section className = "adder-form">
        <form onSubmit = {this.handleSubmit}>
          <label>
            <input
              type = "text"
              required
              onChange = {this.handleInput}
              id = "language"
              value = {this.state.language}
            />
          </label>
          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default LanguageAdder;
