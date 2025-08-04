import { useState, useEffect } from 'react';
import { companies } from '../data/companies';

export const useCompanies = () => {
  const [companiesList, setCompaniesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true);
        // Имитация загрузки с API
        await new Promise(resolve => setTimeout(resolve, 300));
        setCompaniesList(companies);
        setError(null);
      } catch (err) {
        setError('Ошибка загрузки компаний');
        console.error('Error loading companies:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  return {
    companies: companiesList,
    loading,
    error
  };
};