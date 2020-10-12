import React, { Component } from "react";
import LanguageCard from "./LanguageCard";
import LanguageAdder from "./LanguageAdder";

class AsideMenu extends Component {
  state = {
    languages: [{ name: "Korean" }, { name: "Spanish" }],
  };

  addLanguage = (nlanguage) => {
    this.setState((currentState) => {
      return { languages: [...currentState.languages, nlanguage] };
    });
  };

  render() {
    const { languages, students } = this.state;
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
            return <LanguageCard language={language} key={language.name} />;
          })}
          <LanguageAdder addLanguage={this.addLanguage} />
        </div>
      </aside>
    );
  }
}

export default AsideMenu;
