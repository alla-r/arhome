import React from "react";
import SearchIcon from "../../global/assets/icons/search.svg";
import CartIcon from "../../global/assets/icons/cart.svg";
import ProfileIcon from "../../global/assets/icons/profile.svg";
import HeartIcon from "../../global/assets/icons/heart.svg";
import "./styles.scss";

const HomePage = () => {
  return (
    <>
      {/* HEADER SECTION */}
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
      {/* HERO SECTION */}
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
      {/* CATALOG */}
      <div className="catalog content-container">
        <div className="catalog--header-section">
          <div className="separator"></div>
          <h4 className="catalog--header">Каталог</h4>
          <div className="separator"></div>
        </div>
        <div className="catalog--content-section">
          <div className="catalog--first-row">
            <div className="catalog--item">
              <p>Декор</p>
            </div>
            <div className="catalog--item">
              <p>Текстиль</p>
            </div>
            <div className="catalog--item">
              <p>Ковры</p>
            </div>
          </div>
          <div className="catalog--second-row">
            <div className="catalog--item">
              <p>Мебель</p>
            </div>
            <div className="catalog--item">
              <p>Освещение</p>
            </div>
          </div>
        </div>
      </div>
      {/* LATEST */}
      {/* TOP SALES */}
      {/* PROMOTION */}
      {/* NEWS */}
      {/* ABOUT SECTION */}
      <div className="about--section content-container">
        <div className="about--header-section">
          <div className="separator"></div>
          <h4 className="about--header">О компании</h4>
          <div className="separator"></div>
        </div>
        <div className="about--content-section">
          <p className="about--subheader">
            Дизайнерская мебель для дома в интернет-магазине ARHome
          </p>
          <p className="about--content">
            Когда отделочные работы закончены, начинается один из самых приятных
            этапов ремонта – подбор мебели для дома. И, в первую очередь, нам
            хочется меблировать гостиную. Ведь это помещение – общее для всей
            семьи, здесь удобно собираться для неформальных бесед с близкими и
            друзьями. Подбор современной мебели для гостиной не означает
            банальную покупку мягкого дивана и нескольких кресел! Это тщательное
            планирование, как будут размещаться и сочетаться между собой все
            предметы обстановки, включая декор, ковры и освещение.
          </p>
          <div className="about--show-more">Читать далее</div>
        </div>
      </div>
      {/* FOOTER SECTION */}
    </>
  );
};

export default HomePage;
