import styled  from "styled-components";

export const NewsCard = styled.div`
  width: 270px;
  height: 420px;

  .news-card--image {
    height: 284px;
    background-image: url(${props => props.$ImageSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: end;

    .news-date {
      padding: 4px 6px;
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.05em;
      color: #0c0c0c;
      opacity: 0.8;
      background: #fbfbfb;

      span {
        font-weight: 700;
      }
    }
  }

  .news-card--content {
    .news-card--header {
      margin-top: 17px;
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.05em;
      color: #0c0c0c;
    }

    p {
      margin-top: 14px;
      font-weight: 300;
      font-size: 14px;
      line-height: 21px;
      color: #0c0c0c;
      opacity: 0.8;
    }
  }
`;
