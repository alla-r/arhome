import React from "react";
import CustomHeader from "../CustomHeader";
import NewsCarousel from "../NewsCarousel";
import { NewsWrapper } from "./styles";

const NewsSection = ({ data, carouselData }) => {
  return (
    <NewsWrapper className="content-container">
      <CustomHeader data={data.header} />
      <div className="news--content-section">
        <NewsCarousel data={carouselData} />
      </div>
    </NewsWrapper>
  );
};

export default NewsSection;
