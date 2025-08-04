import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>Администрация сайта не несет ответственности за содержание информации, которую размещают посетители.</p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Политика конфиденциальности</a>
            <a href="#sitemap">Карта сайта</a>
            <a href="#feedback">Обратная связь</a>
            <a href="#about">О сайте</a>
            <span>Оставьте отзыв о компании, либо разместите новую компанию для обсуждения</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 