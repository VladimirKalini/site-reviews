import React, { useState, useEffect } from 'react';
import './CompanyReviews.css';

const CompanyReviews = ({ reviews = [], companySlug }) => {
  const [userReviews, setUserReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    rating: 5
  });

  // Загружаем пользовательские отзывы из localStorage для конкретной компании
  useEffect(() => {
    if (companySlug) {
      const savedReviews = localStorage.getItem(`userReviews_${companySlug}`);
      if (savedReviews) {
        setUserReviews(JSON.parse(savedReviews));
      }
    }
  }, [companySlug]);

  // Сохраняем отзывы в localStorage для конкретной компании
  const saveToStorage = (reviews) => {
    if (companySlug) {
      localStorage.setItem(`userReviews_${companySlug}`, JSON.stringify(reviews));
    }
  };

  // Обработка отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.author.trim() || !formData.content.trim()) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    const newReview = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      content: formData.content,
      rating: parseInt(formData.rating),
      timeAgo: 'только что',
      isUserReview: true
    };

    const updatedUserReviews = [newReview, ...userReviews];
    setUserReviews(updatedUserReviews);
    saveToStorage(updatedUserReviews);

    // Очищаем форму
    setFormData({ title: '', author: '', content: '', rating: 5 });
    setShowForm(false);
    
    // Показываем уведомление
    alert('Ваш отзыв успешно добавлен!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Рендер звездочек рейтинга
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  // Объединяем пользовательские отзывы и отзывы компании
  const allReviews = [...userReviews, ...reviews];

  return (
    <div className="company-reviews">
      <div className="reviews-header">
        <h2>Отзывы</h2>
        <button 
          className="write-review-btn" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Отменить' : 'Написать отзыв'}
        </button>
      </div>

      {showForm && (
        <div className="review-form">
          <h3>Оставить отзыв</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Заголовок отзыва:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Краткое описание вашего опыта"
                maxLength="100"
              />
            </div>

            <div className="form-group">
              <label>Ваше имя:</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Как вас зовут?"
                maxLength="50"
              />
            </div>

            <div className="form-group">
              <label>Оценка:</label>
              <select name="rating" value={formData.rating} onChange={handleInputChange}>
                <option value="5">5 звезд - Отлично</option>
                <option value="4">4 звезды - Хорошо</option>
                <option value="3">3 звезды - Нормально</option>
                <option value="2">2 звезды - Плохо</option>
                <option value="1">1 звезда - Ужасно</option>
              </select>
            </div>

            <div className="form-group">
              <label>Ваш отзыв:</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Расскажите подробно о своем опыте использования услуг компании..."
                rows="5"
                maxLength="1000"
              />
              <div className="char-counter">
                {formData.content.length}/1000 символов
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">Опубликовать отзыв</button>
              <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                Отменить
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="reviews-list">
        {allReviews.length === 0 ? (
          <p className="no-reviews">Пока нет отзывов. Станьте первым!</p>
        ) : (
          allReviews.map((review) => (
            <div key={review.id} className={`review-item ${review.isUserReview ? 'user-review' : ''}`}>
              {review.isUserReview && (
                <div className="user-review-badge">Ваш отзыв</div>
              )}
              <div className="review-header">
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
                <span className="review-time">{review.timeAgo}</span>
              </div>
              <h3 className="review-title">{review.title}</h3>
              <div className="review-author">Автор: {review.author}</div>
              <p className="review-content">{review.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompanyReviews; 