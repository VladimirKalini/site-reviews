import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CompanySidebar.css';

const CompanySidebar = () => {
  const [activeTab, setActiveTab] = useState('new');

  const relatedCompanies = [
    {
      id: 1,
      name: 'Ekscentrik.ru интернет-магазин отзывы',
      logo: 'APOGEJ',
      date: '29.04.2025',
      slug: 'ekscentrik-ru'
    },
    {
      id: 2,
      name: 'Франшиза Первый Визовый Центр отзывы, платят или нет?',
      logo: 'ПЕРВЫЙ ВИЗОВЫЙ',
      date: '18.04.2025',
      slug: 'pervyj-vizovyj-centr'
    },
    {
      id: 3,
      name: 'Finrex отзывы, платят или нет?',
      logo: 'FinRex',
      date: '18.04.2025',
      slug: 'finrex'
    },
    {
      id: 4,
      name: 'Apogej.ru интернет-магазин отзывы',
      logo: 'APOGEJ',
      date: '15.03.2025',
      slug: 'apogej-ru'
    },
    {
      id: 5,
      name: 'ПО-МОТОР РФ отзывы/> Виджет',
      logo: 'ПО-МОТОР',
      date: '24.02.2025',
      slug: 'po-motor-rf'
    },
    {
      id: 6,
      name: 'Франшиза ASIA STORE',
      logo: 'ASIA',
      date: '24.02.2025',
      slug: 'asia-store'
    },
    {
      id: 7,
      name: 'Blum',
      logo: 'B',
      date: '24.02.2025',
      slug: 'blum'
    },
    {
      id: 8,
      name: 'Arbitrage Crypto Trader',
      logo: 'ARCT',
      date: '24.02.2025',
      slug: 'arbitrage-crypto-trader'
    }
  ];

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
        {relatedCompanies.map((company) => (
          <Link 
            key={company.id} 
            to={`/company/${company.slug}`} 
            className="sidebar-company-card"
          >
            <div className="sidebar-company-logo">
              <span>{company.logo}</span>
            </div>
            <div className="sidebar-company-info">
              <h4 className="sidebar-company-name">{company.name}</h4>
              <span className="sidebar-company-date">{company.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default CompanySidebar; 