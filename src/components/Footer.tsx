import React, { useState } from 'react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

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

  const privacyPolicyContent = `At Leafbyte Technology Pvt. Ltd. ("we", "our", or "us"), we are committed to respecting and protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website or digital services.

1. What We Collect
We may collect your name, email, phone number, and other basic details when you fill out forms, contact us, subscribe to newsletters, or apply for opportunities through our site.
This information helps us respond to your queries, improve our services, and stay in touch.

2. Technical Information
When you visit our website, we automatically gather non-personal data like your IP address, browser type, and how you use the site. This helps us understand performance and make improvements.

3. Cookies and Tracking
We use cookies small text files saved in your browser to make our website work smoothly and remember your preferences.
You can accept or reject cookies anytime using your browser settings.

4. Use of Your Data
Your data is used only for the purposes you've agreed to like answering your questions, processing applications, or improving your experience.
We do not sell your personal information to anyone.

5. Third-Party Services
We may use trusted partners to help us with website hosting, analytics, or communication. These partners are only given access to data needed to do their job and must keep it confidential.

6. Data Storage & Protection
We store your data securely and take precautions to protect it from unauthorized access, loss, or misuse. While we use industry best practices, no system is entirely risk-free.

7. Data Retention
We keep your personal data only as long as needed for the purpose it was collected. For example, job application data may be stored for up to 24 months unless you request deletion sooner.

8. External Links
Our site may link to other websites. We are not responsible for how those sites handle your data. Always review their privacy policies before sharing your information.

9. Your Rights
Under Nepalese law, you have the right to:
• Request access to your data
• Ask for corrections or deletion
• Withdraw your consent at any time
To do so, contact us using the information below.

10. Policy Updates
We may revise this policy when needed. The latest version will always be available on our website with the updated date. Continued use of our site means you agree to any changes.

11. Contact Us
If you have any questions about this policy or your personal data, reach out to us.`;

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
              <button 
                onClick={() => setShowPrivacyPolicy(true)} 
                className="text-gray-400 hover:text-green-400 text-sm transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 rounded-xl p-6 max-w-4xl max-h-[80vh] overflow-y-auto relative border border-green-400/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-emerald-400/30 to-lime-400/30 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-lime-500/20 rounded-full blur-md animate-pulse animation-delay-1000"></div>
                  <img alt="Leafbyte Technology" className="h-10 w-auto filter drop-shadow-lg relative z-10" src="/leafbyte-uploads/ccb3569c-f557-4f9a-8347-f058ac1194ab.png" />
                </div>
                <h2 className="text-2xl font-bold text-green-400">Privacy Policy</h2>
              </div>
              <button 
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
              {privacyPolicyContent}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
