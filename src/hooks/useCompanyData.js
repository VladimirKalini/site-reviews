import { useState, useEffect } from 'react';
import { companiesData } from '../data/companyData';

export const useCompanyData = (slug) => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCompanyData = async () => {
      try {
        setLoading(true);
        // Имитация загрузки с API
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const companyData = companiesData[slug];
        
        if (!companyData) {
          setError('Компания не найдена');
          setCompany(null);
        } else {
          setCompany(companyData);
          setError(null);
        }
      } catch (err) {
        setError('Ошибка загрузки данных компании');
        console.error('Error loading company data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadCompanyData();
    }
  }, [slug]);

  return {
    company,
    loading,
    error
  };
};