import React from 'react';
import { useReviews } from '../hooks/useReviews';
import './ReviewsBlock.css';

const ReviewsBlock = () => {
  const { reviews, loading, error, loadMoreReviews } = useReviews();

  if (loading) {
    return (
      <section className="reviews-section">
        <div className="container">
          <div className="loading">Загрузка отзывов...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="reviews-section">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </section>
    );
  }

  const reviewsList = [
    ...reviews
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <h2 className="section-title">Новые отзывы</h2>
        <div className="reviews-grid">
          {reviewsList.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <span className="review-date">{review.date}</span>
              </div>
              <h3 className="review-title">{review.title}</h3>
              <div className="review-content">
                {review.hasImage && (
                  <div className="review-logo">
                    <img 
                      src={review.logoImage} 
                      alt={`${review.company} логотип`}
                      className="review-logo-image"
                      onError={(e) => {
                        // Fallback к тексту при ошибке загрузки
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = review.logo;
                      }}
                    />
                  </div>
                )}
                <p className="review-text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="show-more">
          <button className="show-more-btn" onClick={loadMoreReviews}>Показать еще</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsBlock; 