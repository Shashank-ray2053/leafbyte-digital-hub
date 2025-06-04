
import React, { useState } from 'react';
const Footer = () => {
  const services = [{
    name: 'Enterprise Software Development',
    href: '#services'
  }, {
    name: 'DevOps & Cloud Solutions',
    href: '#services'
  }, {
    name: 'Cloud Infrastructure Management',
    href: '#services'
  }, {
    name: 'Cybersecurity Services',
    href: '#services'
  }, {
    name: 'IT Infrastructure Solutions',
    href: '#services'
  }, {
    name: 'Network Architecture & Security',
    href: '#services'
  }];
  const company = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#home'
  }];
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center mb-6 relative">
              {/* Blinking effect background for footer logo */}
              <div className="relative mr-3">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-emerald-400/30 to-lime-400/30 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-lime-500/20 rounded-full blur-md animate-pulse animation-delay-1000"></div>
                <img alt="Leafbyte Technology" className="h-12 w-auto filter drop-shadow-lg relative z-10" src="/leafbyte-uploads/ccb3569c-f557-4f9a-8347-f058ac1194ab.png" />
              </div>
              <h2 className="text-2xl font-bold text-white">Leafbyte Technology</h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Premier technology solutions provider delivering enterprise-grade software development, cutting-edge cybersecurity, and comprehensive digital transformation services. Trusted by businesses across Nepal and internationally for scalable, innovative technology solutions.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-3">
              <div className="text-gray-300">
                <h4 className="text-green-400 font-semibold mb-2">Contact Information</h4>
                <p className="flex items-center gap-2">
                  <span className="text-green-400">📍</span>
                  Kathmandu, Nepal
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-400">📞</span>
                  +977-123-456-7890
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-400">✉️</span>
                  info@leafbytetech.com
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
                Twitter
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
                GitHub
              </a>
            </div>
          </div>

          <div className="animate-slide-in">
            <h4 className="text-lg font-semibold mb-6 text-green-400">Enterprise Solutions</h4>
            <ul className="space-y-3">
              {services.map((service, index) => <li key={index}>
                  <button onClick={() => handleLinkClick(service.href)} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-2 transform block text-left">
                    {service.name}
                  </button>
                </li>)}
            </ul>
          </div>

          <div className="animate-slide-in animation-delay-1000">
            <h4 className="text-lg font-semibold mb-6 text-green-400">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => <li key={index}>
                  <button onClick={() => handleLinkClick(item.href)} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-2 transform block text-left">
                    {item.name}
                  </button>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800/50 pt-8 mt-12 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Leafbyte Technology. All rights reserved. Global Technology Solutions Partner.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => handleLinkClick('#home')} className="text-gray-400 hover:text-green-400 text-sm transition-all duration-300 hover:scale-105">
                Privacy Policy
              </button>
              <button onClick={() => handleLinkClick('#home')} className="text-gray-400 hover:text-green-400 text-sm transition-all duration-300 hover:scale-105">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
