import React from "react";
import { Link } from "@reach/router";
import logo from "./wordcardlogo.png";

const Title = () => {
  return (
    <header className="header">
      <Link to="./">
        <img src={logo} alt="word card logo" />
      </Link>
    </header>
  );
};

export default Title;
