import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Separator = styled.div`
  flex: 1 1 auto;
  height: 1px;
  background: #0c0c0c;
  opacity: 0.2;
`;

export const Header = styled.h4`
  flex: 0 0 auto;
  margin: 0 38px;
  font-weight: 300;
  font-size: 40px;
  line-height: 68px;
  text-align: center;
  color: #0c0c0c;

  @media only screen and (max-width: 768px) {
    margin: 0 27px;
    font-size: 30px;
    line-height: 51px;
  }

  @media only screen and (max-width: 480px) {
    margin: 10px 0;
    font-size: 16px;
    line-height: 27px;
  }
`;
