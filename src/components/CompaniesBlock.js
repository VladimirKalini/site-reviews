import React from 'react';
import { Link } from 'react-router-dom';
import { useCompanies } from '../hooks/useCompanies';
import './CompaniesBlock.css';

const CompaniesBlock = () => {
  const { companies, loading, error } = useCompanies();

  if (loading) {
    return (
      <section className="companies-section">
        <div className="container">
          <div className="loading">Загрузка компаний...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="companies-section">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </section>
    );
  }

  const companiesList = [
    ...companies
  ];

  return (
    <section className="companies-section">
      <div className="container">
        <h2 className="section-title">НОВЫЕ</h2>
        <div className="companies-grid">
          {companiesList.map((company) => (
            <Link key={company.id} to={`/company/${company.slug}`} className="company-card">
              <div className="company-logo-wrapper">
                <img 
                  src={company.logoImage} 
                  alt={`${company.name} логотип`}
                  className="company-logo-image"
                  onError={(e) => {
                    // Fallback к текстовому логотипу при ошибке загрузки изображения
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="company-logo-text" style={{display: 'none'}}>
                  {company.logo}
                </div>
              </div>
              <div className="company-info">
                <div className="company-category">{company.category}</div>
                <div className="company-date">{company.date}</div>
                <h3 className="company-name">{company.name}</h3>
                <p className="company-description">{company.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesBlock; 