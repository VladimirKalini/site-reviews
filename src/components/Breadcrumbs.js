import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ company }) => {
  return (
    <nav className="breadcrumbs">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">🏠 Главная</Link>
          </li>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-item">
            <Link to={`/category/${company.categorySlug}`} className="breadcrumb-link">
              {company.category}
            </Link>
          </li>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-item active">{company.name}</li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 