import React from "react";
import { HeroWrapper, HeroContent } from "./styles";

const HeroSection = ({ data }) => {
  return (
    <HeroWrapper>
      <HeroContent>
        <h1>{data.header}</h1>
        <p>{data.content}</p>
        <button>{data.button}</button>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
