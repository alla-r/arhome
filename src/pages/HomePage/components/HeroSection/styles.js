import styled from "styled-components";
import HeroBG from "../../../../global/assets/images/hero_bg.png";

export const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 173px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      0deg,
      rgba(15, 15, 15, 0.25),
      rgba(15, 15, 15, 0.25)
    ),
    url(${HeroBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 80px);
  }

  @media only screen and (max-width: 480px) {
    height: calc(100vh - 49px);
  }
`;

export const HeroContent = styled.div`
  color: #ffffff;
  text-align: center;

  h1 {
    font-weight: 700;
    font-size: 60px;
    line-height: 102px;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 68px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 16px;
      line-height: 19px;
    }
  }

  p {
    max-width: 797px;
    width: 80%;
    margin: 2px auto 0;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;

    @media only screen and (max-width: 768px) {
      max-width: 569px;
      margin-top: 7px;
      font-size: 20px;
      line-height: 30px;
    }

    @media only screen and (max-width: 480px) {
      max-width: 291px;
      margin-top: 16px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  button {
    width: 326px;
    height: 77px;
    margin-top: 56px;
    background: #0c0c0c;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border: none;

    @media only screen and (max-width: 768px) {
      margin-top: 62px;
      width: 270px;
      height: 50px;
      font-size: 16px;
      line-height: 24px;
    }

    @media only screen and (max-width: 480px) {
      margin-top: 16px;
      width: 163px;
      height: 31px;
      font-size: 11px;
      line-height: 16px;
    }
  }
`;
