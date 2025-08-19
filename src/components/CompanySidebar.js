import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCompanies } from '../hooks/useCompanies';
import { useReviews } from '../hooks/useReviews';
import './CompanySidebar.css';

const CompanySidebar = () => {
  const [activeTab, setActiveTab] = useState('new');
  const { companies } = useCompanies();
  const { reviews } = useReviews();

  // Сортируем компании по дате для "новых"
  const newCompanies = companies
    .sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')))
    .slice(0, 8);

  // Сортируем компании случайно для "популярных" 
  const popularCompanies = [...companies]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  const displayedCompanies = activeTab === 'new' ? newCompanies : popularCompanies;

  return (
    <aside className="company-sidebar">
      <div className="sidebar-tabs">
        <button 
          className={`tab-btn ${activeTab === 'new' ? 'active' : ''}`}
          onClick={() => setActiveTab('new')}
        >
          Новые отзывы
        </button>
        <button 
          className={`tab-btn ${activeTab === 'popular' ? 'active' : ''}`}
          onClick={() => setActiveTab('popular')}
        >
          Популярные отзывы
        </button>
      </div>

      <div className="sidebar-content">
        {displayedCompanies.map((company) => (
          <Link 
            key={company.id} 
            to={`/company/${company.slug}`} 
            className="sidebar-company-card"
          >
            <div className="sidebar-company-logo">
              <img 
                src={company.logoImage} 
                alt={`${company.name} логотип`}
                className="sidebar-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="sidebar-logo-text" style={{display: 'none'}}>{company.logo}</span>
            </div>
            <div className="sidebar-company-info">
              <h4 className="sidebar-company-name">{company.name}</h4>
              <span className="sidebar-company-date">{company.date}</span>
              <span className="sidebar-company-category">{company.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default CompanySidebar; 