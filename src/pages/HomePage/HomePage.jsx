import React from "react";
import SearchIcon from "../../global/assets/icons/search.svg";
import CartIcon from "../../global/assets/icons/cart.svg";
import ProfileIcon from "../../global/assets/icons/profile.svg";
import HeartIcon from "../../global/assets/icons/heart.svg";
import "./styles.scss";

const HomePage = () => {
  return (
    <>
      <div className="header">
        <div className="header-black">
          <div className="content-container">
            <div className="header-black--content">
              <ul className="navbar">
                <li>
                  <a href="#">Блог</a>
                </li>
                <li>
                  <a href="#">Дизайн под ключ</a>
                </li>
                <li>
                  <a href="#">О нас</a>
                </li>
              </ul>
              <div className="action-buttons">
                <div className="phone-number">+38 (050) 456-06-56</div>
                <div className="language--section">
                  <div className="language active">Ru</div>
                  <div className="language">Ua</div>
                </div>
                <div className="icon-section">
                  <img src={SearchIcon} alt="icon" className="icon" />
                  <img src={ProfileIcon} alt="icon" className="icon" />
                  <img src={HeartIcon} alt="icon" className="icon" />
                  <div className="cart--container">
                    <img src={CartIcon} alt="icon" className="cart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-white">
          <div className="content-container">
            <div className="header-white--content">
              <div className="logo"></div>
              <ul className="navbar">
                <li>
                  <a href="#">Декор</a>
                </li>
                <li>
                  <a href="#">Текстиль для дома</a>
                </li>
                <li>
                  <a href="#">Ковры</a>
                </li>
                <li>
                  <a href="#">Мебель</a>
                </li>
                <li>
                  <a href="#">Освещение</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero--content">
          <h1>Дизайнерская мебель</h1>
          <p>
            Широкий ассортимент изделий от лучших немецких дизайнеров,
            безупречное качество и стиль
          </p>
          <button>Смотреть каталог</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
