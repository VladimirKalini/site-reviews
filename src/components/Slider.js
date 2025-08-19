import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      company: '999auto',
      logoImage: '/images/logos/999auto.svg',
      category: 'Автомобили',
      description: '🚗 999AUTO.RU - Лучшие специалисты и превосходное качество! Моторы европейского уровня с быстрой доставкой...',
      date: '02.08.2025',
      image: '/images/999auto.jpg'
    },
    {
      id: 2,
      company: 'Сбербанк',
      logoImage: '/images/logos/sberbank.png',
      category: 'Банки', 
      description: '🔥 НОВАЯ КАРТА СБЕРБАНКА: Кешбэк до 30%! Клиенты в шоке от условий...',
      date: '15.12.2024',
      image: '/images/sberbank.jpg'
    },
    {
      id: 3,
      company: 'Wildberries',
      logoImage: '/images/logos/wildberries.png',
      category: 'Интернет-магазины',
      description: '⚡ СКАНДАЛ: Блогеры раскрыли правду о ценах на Wildberries! Что скрывают?',
      date: '14.12.2024',
      image: '/images/wildberries.jpg'
    },
    {
      id: 4,
      company: 'Яндекс',
      logoImage: '/images/logos/yandex.png',
      category: 'IT и интернет',
      description: '🚨 ЯНДЕКС ТАКСИ подорожало на 40%! Водители и пассажиры в ярости...',
      date: '14.12.2024',
      image: '/images/yandex.jpg'
    },
    {
      id: 5,
      company: 'Ozon',
      logoImage: '/images/logos/ozon.png',
      category: 'Интернет-магазины',
      description: '💸 ОЗОН vs WILDBERRIES: Эпичная ценовая война! Кто победит?',
      date: '13.12.2024',
      image: '/images/ozon.jpg'
    },
    {
      id: 6,
      company: 'Тинькофф Банк',
      logoImage: '/images/logos/inkoff.png',
      category: 'Банки',
      description: '🏆 ТИНЬКОФФ ОБОГНАЛ СБЕРБАНК по клиентскому сервису! Как такое возможно?',
      date: '13.12.2024',
      image: '/images/tinkoff.jpg'
    },
    {
      id: 7,
      company: 'МТС',
      logoImage: '/images/logos/mts.png',
      category: 'Мобильная связь',
      description: '📱 МТС ЗАПУСТИЛ 5G! Но есть подвох... Абоненты негодуют!',
      date: '12.12.2024',
      image: '/images/mts.jpg'
    }
  ];

  // Автопереключение слайдов
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 секунд

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentSlide(index);
  };

  // Возобновить автопереключение через 10 секунд после ручного управления
  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => {
        setIsAutoPlay(true);
      }, 10000);
      
      return () => clearTimeout(timeout);
    }
  }, [isAutoPlay]);

  return (
    <section className="slider-section">
      <div className="container">
        <div 
          className="slider"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={slide.id} className="slide">
                <div className="slide-content">
                  <div className="slide-image">
                    <img 
                      src={slide.logoImage} 
                      alt={`${slide.company} логотип`}
                      className="company-logo-img"
                      onError={(e) => {
                        // Fallback к тексту при ошибке загрузки
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="company-logo" style={{display: 'none'}}>{slide.company}</div>
                  </div>
                  <div className="slide-info">
                    <div className="slide-date">{slide.date}</div>
                    <h3 className="slide-title">{slide.company}</h3>
                    <p className="slide-description">{slide.description}</p>
                    <span className="slide-category">{slide.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-btn prev-btn" onClick={prevSlide}>‹</button>
          <button className="slider-btn next-btn" onClick={nextSlide}>›</button>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider; 