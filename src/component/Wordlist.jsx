import React, { Component } from "react";

class Wordlist extends Component {
  state = {
    words: ["Do", "Watch", "Tomato", "Banana"],
  };

  render() {
    console.log(this.state, "<this.state");
    const words = this.state.words;
    return (
      <section className="main">
        <main>
          <section className="cards">
            <p>{words[0]}</p>
          </section>
        </main>
      </section>
    );
  }
}

export default Wordlist;
