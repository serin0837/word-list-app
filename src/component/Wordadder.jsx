import React, { Component } from "react";

class WordAdder extends Component {
  render() {
    return (
      <section className="form">
        <form className="form__card">
          <label className="label">
            Word:<input type="text"></input>
          </label>
          <label className="label">
            Meaning:<input type="test"></input>
          </label>
          <label className="label">
            Note:<input type="note"></input>
          </label>
          <button>Add a word</button>
        </form>
      </section>
    );
  }
}

export default WordAdder;
