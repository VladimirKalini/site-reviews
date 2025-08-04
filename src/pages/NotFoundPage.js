import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Header />
      <main className="not-found-main">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Страница не найдена</h2>
            <p className="not-found-text">
              К сожалению, запрашиваемая страница не существует или была удалена.
            </p>
            <Link to="/" className="not-found-button">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;