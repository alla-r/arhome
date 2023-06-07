import React from "react";
import {
  AboutSectionStyle,
  AboutSubHeader,
  AboutContent,
  ShowMoreButton,
} from "./styles";
import { SHOW_MORE_TEXT } from "../../../../global/data/homePageData";
import CustomHeader from "../CustomHeader";

const AboutSection = ({ data }) => {
  return (
    <AboutSectionStyle className="content-container">
      <CustomHeader data={data.header} />
      <div>
        <AboutSubHeader>{data.subheader}</AboutSubHeader>
        <AboutContent>{data.content}</AboutContent>
        <ShowMoreButton className="about--show-more">
          {SHOW_MORE_TEXT}
        </ShowMoreButton>
      </div>
    </AboutSectionStyle>
  );
};

export default AboutSection;
