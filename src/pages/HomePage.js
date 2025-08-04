import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import CompaniesBlock from '../components/CompaniesBlock';
import ReviewsBlock from '../components/ReviewsBlock';

const HomePage = () => (
  <>
    <Header />
    <main className="main-content">
      <Slider />
      <CompaniesBlock />
      <ReviewsBlock />
    </main>
    <Footer />
  </>
);

export default HomePage;