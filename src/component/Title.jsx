import React from "react";
import { Link } from "@reach/router";
import logo from "../img/wordcardlogo.png";


const Title = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="word card logo" />
      </Link>
    </header>
    //do I need to put link for bookmark?
  );
};

export default Title;
