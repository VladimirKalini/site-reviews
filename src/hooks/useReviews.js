import { useState, useEffect } from 'react';
import { reviews } from '../data/reviews';

export const useReviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        // Имитация загрузки с API
        await new Promise(resolve => setTimeout(resolve, 300));
        setReviewsList(reviews);
        setError(null);
      } catch (err) {
        setError('Ошибка загрузки отзывов');
        console.error('Error loading reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const loadMoreReviews = async () => {
    // Логика для загрузки дополнительных отзывов
    // Пока что просто имитация
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      // В реальном приложении здесь была бы загрузка следующей порции данных
      setLoading(false);
    } catch (err) {
      setError('Ошибка загрузки дополнительных отзывов');
      setLoading(false);
    }
  };

  return {
    reviews: reviewsList,
    loading,
    error,
    loadMoreReviews
  };
};