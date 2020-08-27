import React from "react";
import { Link } from "@reach/router";
import logo from "./wordcardlogo.png";
import bookmark from "./bookmark.png";

const Title = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="word card logo" />
      </Link>
      <Link to="/bookmark">
        <img src={bookmark} alt="bookmark" />
      </Link>
    </header>
    //do I need to put link for bookmark?
  );
};

export default Title;
