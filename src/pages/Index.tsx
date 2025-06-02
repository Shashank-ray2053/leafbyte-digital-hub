
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />
      <ContactModal />
    </div>
  );
};

export default Index;
