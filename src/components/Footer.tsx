import React, { useState } from 'react';

const Footer = () => {
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState({
    city: 'Kathmandu',
    country: 'Nepal',
    postalCode: '44600'
  });

  const services = [
    { name: 'Enterprise Software Development', href: '#services' },
    { name: 'DevOps & Cloud Solutions', href: '#services' },
    { name: 'Cloud Infrastructure Management', href: '#services' },
    { name: 'Cybersecurity Services', href: '#services' },
    { name: 'IT Infrastructure Solutions', href: '#services' },
    { name: 'Network Architecture & Security', href: '#services' }
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#home' }
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddressChange = (field: string, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveAddress = () => {
    setIsEditingAddress(false);
    // Here you could save to localStorage or send to an API
    localStorage.setItem('companyAddress', JSON.stringify(address));
  };

  // Load address from localStorage on component mount
  React.useEffect(() => {
    const savedAddress = localStorage.getItem('companyAddress');
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center mb-6">
              <img 
                alt="Leafbyte Technology" 
                className="h-12 w-auto filter drop-shadow-lg mr-3" 
                src="/leafbyte-uploads/e4c17fc9-b843-4261-aa22-2d49a1cf4a79.png"
                onError={(e) => {
                  // Fallback to the correct path if the image fails to load
                  e.currentTarget.src = "/lovable-uploads/37345126-e659-43bc-92bb-ef6a37d5844d.png";
                }}
              />
              <h2 className="text-2xl font-bold text-white">Leafbyte Technology</h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading Technology Solutions Provider delivering cutting-edge digital transformation services to businesses across Nepal and globally. We specialize in enterprise software development, cybersecurity solutions, and scalable cloud infrastructure that drives measurable business growth and operational excellence.
            </p>
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
              {services.map((service, index) => (
                <li key={index}>
                  <button onClick={() => handleLinkClick(service.href)} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-2 transform block text-left">
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-in animation-delay-1000">
            <h4 className="text-lg font-semibold mb-6 text-green-400">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button onClick={() => handleLinkClick(item.href)} className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-2 transform block text-left">
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-green-400">Visit Us</h4>
                <button
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  {isEditingAddress ? 'Cancel' : 'Edit'}
                </button>
              </div>
              
              {isEditingAddress ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) => handleAddressChange('city', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:border-green-400 focus:outline-none"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    value={address.country}
                    onChange={(e) => handleAddressChange('country', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:border-green-400 focus:outline-none"
                    placeholder="Country"
                  />
                  <input
                    type="text"
                    value={address.postalCode}
                    onChange={(e) => handleAddressChange('postalCode', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600 focus:border-green-400 focus:outline-none"
                    placeholder="Postal Code"
                  />
                  <button
                    onClick={handleSaveAddress}
                    className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="text-gray-400">
                  <p>{address.city}</p>
                  <p>{address.country}</p>
                  <p>{address.postalCode}</p>
                </div>
              )}
            </div>
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
    </footer>
  );
};

export default Footer;
