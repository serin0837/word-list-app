import React from "react";
import { Link } from "@reach/router";
import logo from "./wordcardlogo.png";
import bookmark from "./bookmark.png";

const Title = () => {
  const toggleClick = () => {
    this.sideBarObj.toggle();
  };
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="word card logo" />
      </Link>
      <span onClick={toggleClick} className="bookmark">
        <img src={bookmark} alt="bookmark" />
      </span>
    </header>
    //do I need to put link for bookmark?
  );
};

export default Title;
