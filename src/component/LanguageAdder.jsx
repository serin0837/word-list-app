import React, { Component } from "react";

class LanguageAdder extends Component {
  state = {
    name: "",
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    this.props.addLanguage({ ...this.state });
  };

  handleInput = (inputEvent) => {
    const value = inputEvent.target.value;
    const id = inputEvent.target.id;
    this.setState((currentState) => {
      return { [id]: value };
    });
    console.log(value);
  };
  render() {
    return (
      <section className="adder-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              onChange={this.handleInput}
              id="name"
              value={this.state.name}
            />
          </label>
          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default LanguageAdder;
