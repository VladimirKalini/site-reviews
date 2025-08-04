import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categorySlug } = useParams();

  // Маппинг категорий
  const categoryMap = {
    'automobiles': 'Автомобили',
    'banks': 'Банки',
    'it': 'IT и интернет', 
    'shops': 'Интернет-магазины',
    'telecom': 'Мобильная связь',
    'retail': 'Торговля',
    'electronics': 'Электроника',
    'classifieds': 'Объявления',
    'energy': 'Энергетика'
  };

  // Все компании (дублируем из CompaniesBlock.js)
  const allCompanies = [
    {
      id: 1,
      name: 'MotorZen отзывы',
      category: 'Автомобили',
      date: '16.12.2024',
      description: 'Автосервис и продажа автомобилей. Отзывы клиентов о качестве ремонта, обслуживании и продаже автомобилей.',
      logo: 'MOTORZEN',
      logoImage: '/images/logos/motorzen.png',
      slug: 'motorzen'
    },
    {
      id: 2,
      name: 'Сбербанк отзывы',
      category: 'Банки',
      date: '15.12.2024',
      description: 'Крупнейший банк России. Отзывы клиентов о качестве обслуживания, кредитах, депозитах и мобильном приложении.',
      logo: 'СБЕРБАНК',
      logoImage: '/images/logos/sberbank.png',
      slug: 'sberbank'
    },
    {
      id: 3,
      name: 'Яндекс отзывы',
      category: 'IT и интернет',
      date: '14.12.2024',
      description: 'Российская IT-компания. Отзывы о поисковике, Яндекс.Такси, Яндекс.Еде, Яндекс.Маркете и других сервисах.',
      logo: 'ЯНДЕКС',
      logoImage: '/images/logos/yandex.png',
      slug: 'yandex'
    },
    {
      id: 4,
      name: 'Wildberries отзывы',
      category: 'Интернет-магазины',
      date: '14.12.2024',
      description: 'Крупнейший российский маркетплейс. Отзывы покупателей о доставке, качестве товаров и обслуживании.',
      logo: 'WB',
      logoImage: '/images/logos/wildberries.png',
      slug: 'wildberries'
    },
    {
      id: 5,
      name: 'Ozon отзывы',
      category: 'Интернет-магазины',
      date: '13.12.2024',
      description: 'Российский интернет-магазин и маркетплейс. Отзывы о покупках, доставке Ozon и программе лояльности.',
      logo: 'OZON',
      logoImage: '/images/logos/ozon.png',
      slug: 'ozon'
    },
    {
      id: 6,
      name: 'Тинькофф Банк отзывы',
      category: 'Банки',
      date: '13.12.2024',
      description: 'Частный российский банк. Отзывы клиентов о картах, кредитах, депозитах и качестве обслуживания.',
      logo: 'ТИНЬКОФФ',
      logoImage: '/images/logos/inkoff.png',
      slug: 'tinkoff'
    },
    {
      id: 7,
      name: 'МТС отзывы',
      category: 'Мобильная связь',
      date: '12.12.2024',
      description: 'Крупнейший оператор сотовой связи России. Отзывы о тарифах, качестве связи и обслуживании.',
      logo: 'МТС',
      logoImage: '/images/logos/mts.png',
      slug: 'mts'
    },
    {
      id: 8,
      name: 'Магнит отзывы',
      category: 'Торговля',
      date: '12.12.2024',
      description: 'Российская сеть продуктовых магазинов. Отзывы покупателей о качестве товаров и обслуживании.',
      logo: 'МАГНИТ',
      logoImage: '/images/logos/magnit.png',
      slug: 'magnit'
    },
    {
      id: 9,
      name: 'Билайн отзывы',
      category: 'Мобильная связь',
      date: '11.12.2024',
      description: 'Российский оператор сотовой связи. Отзывы абонентов о тарифах, интернете и качестве связи.',
      logo: 'БИЛАЙН',
      logoImage: '/images/logos/beeline.png',
      slug: 'beeline'
    },
    {
      id: 10,
      name: 'Пятёрочка отзывы',
      category: 'Торговля',
      date: '11.12.2024',
      description: 'Сеть продуктовых магазинов формата "у дома". Отзывы о ценах, ассортименте и обслуживании.',
      logo: 'ПЯТЁРОЧКА',
      logoImage: '/images/logos/pyaterochka.png',
      slug: 'pyaterochka'
    },
    {
      id: 11,
      name: 'М.Видео отзывы',
      category: 'Электроника',
      date: '10.12.2024',
      description: 'Сеть магазинов электроники и бытовой техники. Отзывы о покупках, доставке и гарантийном обслуживании.',
      logo: 'М.ВИДЕО',
      logoImage: '/images/logos/mvideo.png',
      slug: 'mvideo'
    },
    {
      id: 12,
      name: 'Авито отзывы',
      category: 'Объявления',
      date: '10.12.2024',
      description: 'Крупнейший российский сайт объявлений. Отзывы пользователей о покупках, продажах и безопасности сделок.',
      logo: 'АВИТО',
      logoImage: '/images/logos/avito.png',
      slug: 'avito'
    },
    {
      id: 13,
      name: 'МегаФон отзывы',
      category: 'Мобильная связь',
      date: '09.12.2024',
      description: 'Российский оператор сотовой связи. Отзывы о тарифах, роуминге и качестве обслуживания клиентов.',
      logo: 'МЕГАФОН',
      logoImage: '/images/logos/megafon.png',
      slug: 'megafon'
    },
    {
      id: 14,
      name: 'DNS отзывы',
      category: 'Электроника',
      date: '09.12.2024',
      description: 'Сеть магазинов цифровой и бытовой техники. Отзывы покупателей о товарах, ценах и сервисе.',
      logo: 'DNS',
      logoImage: '/images/logos/dns.png',
      slug: 'dns'
    },
    {
      id: 15,
      name: 'Лента отзывы',
      category: 'Торговля',
      date: '08.12.2024',
      description: 'Российская сеть гипермаркетов. Отзывы покупателей о качестве продуктов и уровне обслуживания.',
      logo: 'ЛЕНТА',
      logoImage: '/images/logos/lenta.png',
      slug: 'lenta'
    },
    {
      id: 16,
      name: 'Газпром отзывы',
      category: 'Энергетика',
      date: '08.12.2024',
      description: 'Крупнейшая российская энергетическая компания. Отзывы о поставках газа и обслуживании клиентов.',
      logo: 'ГАЗПРОМ',
      logoImage: '/images/logos/gazprom.png',
      slug: 'gazprom'
    },
    {
      id: 17,
      name: 'Роснефть отзывы',
      category: 'Энергетика',
      date: '07.12.2024',
      description: 'Российская нефтяная компания. Отзывы о качестве топлива на АЗС и программе лояльности.',
      logo: 'РОСНЕФТЬ',
      logoImage: '/images/logos/rosneft.png',
      slug: 'rosneft'
    }
  ];

  const categoryName = categoryMap[categorySlug] || 'Неизвестная категория';
  
  // Фильтруем компании по категории
  const filteredCompanies = allCompanies.filter(company => company.category === categoryName);

  return (
    <div className="category-page">
      <Header />
      
      <main className="category-main">
        <div className="container">
          <div className="category-header">
            <div className="breadcrumbs">
              <Link to="/">Главная</Link> <span>/</span> <span>{categoryName}</span>
            </div>
            <h1 className="category-title">
              {categoryName} 
              <span className="category-count">({filteredCompanies.length})</span>
            </h1>
            <p className="category-description">
              Отзывы о компаниях в категории "{categoryName}" — честные мнения реальных клиентов
            </p>
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="no-companies">
              <h3>В этой категории пока нет компаний</h3>
              <p>Скоро здесь появятся новые компании для отзывов</p>
              <Link to="/" className="back-home-btn">Вернуться на главную</Link>
            </div>
          ) : (
            <div className="companies-grid">
              {filteredCompanies.map((company) => (
                <Link key={company.id} to={`/company/${company.slug}`} className="company-card">
                  <div className="company-logo-wrapper">
                    <img 
                      src={company.logoImage} 
                      alt={`${company.name} логотип`}
                      className="company-logo-image"
                      onError={(e) => {
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
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage; 