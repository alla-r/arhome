import React from "react";
import { HeaderContainer, Separator, Header } from "./styles";

const CustomHeader = ({ data }) => {
  return (
    <HeaderContainer>
      <Separator />
      <Header>{data}</Header>
      <Separator />
    </HeaderContainer>
  );
};

export default CustomHeader;
