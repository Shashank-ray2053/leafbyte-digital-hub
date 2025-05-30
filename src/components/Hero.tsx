
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-emerald-100/30 to-lime-100/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15),transparent_70%)]"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-300/40 to-emerald-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-r from-emerald-300/40 to-lime-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-lime-300/40 to-green-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float animation-delay-2000"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-green-400/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-emerald-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-lime-400/30 rounded-full animate-bounce animation-delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-gradient">
              <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-600 bg-clip-text text-transparent animate-gradient">
                Global Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-800 via-emerald-800 to-lime-800 bg-clip-text text-transparent">Solutions Partner</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-green-700 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium">
              Empowering enterprises worldwide with innovative software solutions, advanced cybersecurity, and strategic technology consulting services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-stagger-in">
              <Button 
                size="lg" 
                onClick={openModal}
                className="bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 hover:from-green-700 hover:via-emerald-700 hover:to-lime-700 text-white px-10 py-4 text-xl font-bold rounded-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl animate-pulse hover:animate-none border-2 border-green-400/50"
              >
                Start Your Digital Transformation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleViewServices}
                className="border-3 border-green-600 text-green-700 hover:bg-gradient-to-r hover:from-green-600 hover:via-emerald-600 hover:to-lime-600 hover:text-white px-10 py-4 text-xl font-bold rounded-xl transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl bg-white/80 backdrop-blur-sm"
              >
                Explore Our Capabilities
              </Button>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-green-600" size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
