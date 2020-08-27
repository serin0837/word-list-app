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
    const { languages } = this.state;
    return (
      <aside className="aside">
        <header>
          <h2>
            <span>🖋</span> Languages
          </h2>
        </header>
        {languages.map((language) => {
          return <LanguageCard language={language} key={language.name} />;
        })}
        <LanguageAdder addLanguage={this.addLanguage} />
        <header>
          <h2>
            <span>🖋</span> Students
          </h2>
        </header>
      </aside>
    );
  }
}

export default AsideMenu;
