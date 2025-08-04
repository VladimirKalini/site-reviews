import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './Header.css';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const handleCloseModal = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const handleSwitchToRegister = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-search">
            <input type="text" placeholder="Искать" className="search-input" />
            <button className="search-btn">🔍</button>
          </div>
          <div className="header-auth">
            <button className="auth-btn login-btn" onClick={handleLoginClick}>
              Вход
            </button>
            <span className="auth-separator">/</span>
            <button className="auth-btn register-btn" onClick={handleRegisterClick}>
              Регистрация
            </button>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo">
            <h1>ОТЗОВИК</h1>
          </Link>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <div className="nav-row">
            <ul className="nav-menu">
              <li><Link to="/category/automobiles">Автомобили</Link></li>
              <li><Link to="/category/banks">Банки</Link></li>
              <li><Link to="/category/it">IT и интернет</Link></li>
              <li><Link to="/category/shops">Интернет-магазины</Link></li>
              <li><Link to="/category/telecom">Мобильная связь</Link></li>
              <li><Link to="/category/retail">Торговля</Link></li>
              <li><Link to="/category/electronics">Электроника</Link></li>
              <li><Link to="/category/classifieds">Объявления</Link></li>
              <li><Link to="/category/energy">Энергетика</Link></li>
              <li><Link to="/category/restaurants">Ресторан</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {showLoginForm && (
        <LoginForm 
          onClose={handleCloseModal}
          onSwitchToRegister={handleSwitchToRegister}
        />
      )}

      {showRegisterForm && (
        <RegisterForm 
          onClose={handleCloseModal}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </header>
  );
};

export default Header; 