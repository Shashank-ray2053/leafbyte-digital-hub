
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Footer />
      <ContactModal />
    </div>
  );
};

export default Index;
