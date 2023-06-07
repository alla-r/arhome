import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import { NewsCard } from "./styles";
import { getMonthName } from "../../../../../../global/helpers";
import "./styles.scss";

const NewsCarousel = ({ data }) => {
  const breakpointsConfig = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  const items = data.map(({ date, id, imageURL, header, content }) => (
    <SwiperSlide key={id}>
      <NewsCard $ImageSrc={imageURL}>
        <div className="news-card--image">
          <div className="news-date">
            <span>{new Date(date).getDate()}</span> {getMonthName(date)}
          </div>
        </div>
        <div className="news-card--content">
          <div className="news-card--header">{header}</div>
          <p>{content}</p>
        </div>
      </NewsCard>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        }}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        className="mySwiper"
        breakpoints={breakpointsConfig}
      >
        {items}
      </Swiper>
      <div className="swiper-button-prev-unique"></div>
      <div className="swiper-button-next-unique"></div>
    </>
  );
};

export default NewsCarousel;
