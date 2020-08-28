import React from "react";
import { Link } from "@reach/router";

const StudentCard = ({ student }) => {
  return (
    <button className="aside-button">
      <Link to={student.name}>{student.name}</Link>
    </button>
  );
};

export default StudentCard;
