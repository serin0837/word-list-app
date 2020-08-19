import React, { Component } from "react";
import { v4 as randomNum } from "uuid";

class WordAdder extends React.Component {
  state = {
    name: "",
    meaning: "",
    note: "",
    remember: "false",
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    this.props.addWord({ id: randomNum(), ...this.state });
    // props.addWord({
    //   name: "뭐",
    //   meaning: "what",
    //   note: "d",
    //   remember: "false",
    // });
    // can not access props because we changed function to classes
    // where is props? this.props
    this.setState((currentState) => {
      return { name: "", meaning: "", note: "", remember: "false" };
    });
  };
  handleInput = (inputEvent) => {
    const value = inputEvent.target.value;
    const id = inputEvent.target.id;
    //synthetic event
    this.setState((currentState) => {
      return { [id]: value };
    });
    // console.log(this.state);
    //setState is asyncronos so setState can take secont function
    //so see console.log first and then fucntion
    //so you use for visualizatin
  };
  render() {
    return (
      <section className="form">
        <form onSubmit={this.handleSubmit} className="form__card">
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
