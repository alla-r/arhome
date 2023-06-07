import styled from "styled-components";

export const AboutSectionStyle = styled.div`
  margin-top: 61px !important;

  @media only screen and (max-width: 768px) {
    margin-top: 49px !important;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 30px !important;
  }
`;

export const AboutSubHeader = styled.h6`
  margin-top: 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #000000;

  @media only screen and (max-width: 768px) {
    margin-top: 24px;
    font-size: 14px;
    line-height: 21px;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 16px;
  }
`;

export const AboutContent = styled.p`
  width: 90%;
  max-width: 1135px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #0c0c0c;

  @media only screen and (max-width: 768px) {
    margin-top: 24px;
    font-size: 14px;
    line-height: 25px;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
    font-size: 13px;
    line-height: 23px;
  }
`;

export const ShowMoreButton = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.05em;
  text-decoration-line: underline;
  color: #375d7c;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
