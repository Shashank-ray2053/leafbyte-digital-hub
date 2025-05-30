
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useContactModal } from '@/hooks/useContactModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-gradient-to-r from-green-50/95 via-emerald-50/95 to-lime-50/95 backdrop-blur-md shadow-2xl border-b border-green-200' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-36">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group cursor-pointer animate-float" onClick={() => handleNavClick('#home')}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/37345126-e659-43bc-92bb-ef6a37d5844d.png" 
                  alt="Leafbyte Technology" 
                  className="h-40 w-auto group-hover:scale-125 transition-all duration-500 filter drop-shadow-2xl hover:drop-shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 via-emerald-500/40 to-lime-500/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-green-800 hover:text-emerald-600 px-4 py-3 text-lg font-semibold transition-all duration-400 relative group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 group-hover:w-full transition-all duration-400 rounded-full"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-emerald-100/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={openModal}
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 hover:from-green-700 hover:via-emerald-700 hover:to-lime-700 text-white font-bold px-8 py-3 text-lg rounded-xl transition-all duration-400 transform hover:scale-110 shadow-2xl hover:shadow-3xl animate-pulse hover:animate-none border-2 border-green-400/50"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800 hover:text-emerald-600 p-3 transition-all duration-300 hover:bg-green-100/50 rounded-lg"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-green-50/95 via-emerald-50/95 to-lime-50/95 backdrop-blur-md rounded-xl shadow-2xl mt-2 border border-green-200">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-green-800 hover:text-emerald-600 hover:bg-green-100/50 block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 w-full text-left animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={() => {
                    openModal();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 hover:from-green-700 hover:via-emerald-700 hover:to-lime-700 text-white font-bold py-3 rounded-xl transition-all duration-400 animate-fade-in"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
