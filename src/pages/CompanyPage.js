import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CompanyReviews from '../components/CompanyReviews';
import CompanySidebar from '../components/CompanySidebar';
import { useCompanyData } from '../hooks/useCompanyData';
import './CompanyPage.css';

const CompanyPage = () => {
  const { slug } = useParams();
  const { company, loading, error } = useCompanyData(slug);

  if (loading) {
    return (
      <div className="company-page">
        <Header />
        <main className="company-main">
          <div className="container">
            <div className="loading">Загрузка...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="company-page">
        <Header />
        <main className="company-main">
          <div className="container">
            <div className="error">{error}</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="company-page">
        <Header />
        <main className="company-main">
          <div className="container">
            <div className="not-found">Компания не найдена</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="company-page">
      <Header />
      <Breadcrumbs company={company} />
      
      <main className="company-main">
        <div className="container">
          <div className="company-header">
            <div className="company-category-badge">{company.category}</div>
            <h1 className="company-title">{company.name}</h1>
            <div className="company-date">{company.date}</div>
            {company.image && (
              <div className="company-image">
                <img src={company.image} alt={company.name} />
              </div>
            )}
          </div>

          <div className="company-content">
            <div className="company-reviews-section">
              <CompanyReviews reviews={company.reviews} companySlug={slug} />
            </div>
            <div className="company-sidebar-section">
              <CompanySidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyPage;