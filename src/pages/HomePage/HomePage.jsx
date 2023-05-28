import React from "react";
import SearchIcon from "../../global/assets/icons/search.svg";
import CartIcon from "../../global/assets/icons/cart.svg";
import ProfileIcon from "../../global/assets/icons/profile.svg";
import HeartIcon from "../../global/assets/icons/heart.svg";
import InstagramIcon from "../../global/assets/icons/instagram.svg";
import FacebookIcon from "../../global/assets/icons/facebook.svg";
import NewsCarousel from "./components/NewsCarousel";
import "./styles.scss";
import { NEWS_CAROUSEL_DATA } from "../../global/data/homePageData";

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
      <div className="news--section content-container">
        <div className="news--header-section">
          <div className="separator"></div>
          <h4 className="news--header">Новости компании</h4>
          <div className="separator"></div>
        </div>
        <div className="news--content-section">
          <NewsCarousel data={NEWS_CAROUSEL_DATA} />
        </div>
      </div>
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
      <footer>
        <div className="footer--content content-container">
          <div className="footer--first-column column">
            <div className="logo"></div>
            <div className="social-media-icons">
              <img src={InstagramIcon} alt="icon" className="icon instagram" />
              <img src={FacebookIcon} alt="icon" className="icon" />
            </div>
            <div className="copyright">© 2020 Arhome Interior decor</div>
          </div>
          <div className="footer--second-column column">
            <div className="footer--header">
              <div className="footer--header-content">Информация</div>
              <div className="separator"></div>
            </div>
            <div className="footer--info">
              <div className="footer--info-item">— Блог</div>
              <div className="footer--info-item">— Каталог</div>
              <div className="footer--info-item">— О нас</div>
              <div className="footer--info-item">— Контакты</div>
              <div className="footer--info-item">— Оплата и доставка</div>
              <div className="footer--info-item">
                — Политика конфиденциальности{" "}
              </div>
              <div className="footer--info-item">— Условия пользования</div>
            </div>
          </div>
          <div className="footer--third-column column">
            <div className="footer--header">
              <div className="footer--header-content">Контакты</div>
              <div className="separator"></div>
            </div>
            <div className="footer--contact">
              <div className="contact">
                <div className="contact-item address">
                  г. Днепр, ул. Саранская, 95
                </div>
                <div className="contact-item phone">+38 (050) 456-06-56</div>
              </div>
              <div className="contact">
                <div className="contact-item address">
                  г. Киев, ул. Глубочицкая, 13
                </div>
                <div className="contact-item phone">+38 (050) 451-12-00</div>
              </div>
              <div className="email">arhome.com.ua@gmail.com</div>
            </div>
          </div>
          <div className="footer--fourth-column column">
            <div className="footer--header">
              <div className="footer--header-content">новостная рассылка</div>
              <div className="separator"></div>
            </div>
            <form>
              <input type="email" placeholder="Ваш  Email" />
              <p>Подписаться на новостную рассылку</p>
              <button>Подписаться</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
