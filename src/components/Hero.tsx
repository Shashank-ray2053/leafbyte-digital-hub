
import React from 'react';
import { Button } from '@/components/ui/button';
import { useContactModal } from '@/hooks/useContactModal';

const Hero = () => {
  const { openModal } = useContactModal();

  const handleViewServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 pt-20 md:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-green-800 leading-tight">
            Global Technology Solutions Partner
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Empowering enterprises worldwide with innovative software solutions, advanced cybersecurity, and strategic technology consulting services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={openModal}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold shadow-lg"
            >
              Start Your Digital Transformation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleViewServices}
              className="w-full sm:w-auto border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold transition-colors"
            >
              Explore Our Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
