import React, { Component } from "react";
import LanguageCard from "./LanguageCard";
import LanguageAdder from "./LanguageAdder";
import StudentCard from "./StudentCard";

class AsideMenu extends Component {
  state = {
    languages: [{ name: "Korean" }, { name: "Spanish" }],
    students: [{ name: "Serin" }, { name: "Jack" }],
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
        <header>
          <h2>
            <span>🖋</span> Students
          </h2>
        </header>
        <div>
          {students.map((student) => {
            return <StudentCard student={student} key={student.name} />;
          })}
        </div>
      </aside>
    );
  }
}

export default AsideMenu;
