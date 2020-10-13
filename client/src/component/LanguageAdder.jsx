import React, { Component } from "react";
import axios from "axios"

class LanguageAdder extends Component {
  state = {
    language: "",
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const language={
      language:this.state.language
    }

    console.log(language)
    axios.post("https://word-back.herokuapp.com/api/languages/", language)
    .then((res)=>console.log(res.data))
    // this.props.addLanguage({ ...this.state });
    // window.location = "/";
    this.setState({
      language: "",
    });
  };

  handleInput = (inputEvent) => {
    const value = inputEvent.target.value;
    // const id = inputEvent.target.id;
    this.setState((currentState) => {
      return { language: value };
    });
  };
  render() {
    return (
      <section className="adder-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              required
              onChange={this.handleInput}
              id="language"
              value={this.state.language}
            />
          </label>
          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default LanguageAdder;
