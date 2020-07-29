import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme};
`;
const AsideMenu = () => {
  return (
    <aside className="aside">
      <Button theme={"purple"}>My note</Button>
      <Button theme={"darkolivegreen"}>Spanish word</Button>
    </aside>
  );
};

export default AsideMenu;
