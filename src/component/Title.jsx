import React from "react";
import { Link } from "@reach/router";
import logo from "../img/wordcardlogo.png";
import Authentification from "./Authentification"

const Title = () => {
  return (
    <header className="header">
      <div>
      <Link to="/">
        <img src={logo} alt="word card logo" />
      </Link>
      </div>
      <div>
      <Authentification/>
      </div>
    </header>
  );
};

export default Title;
