
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: 'Global Excellence',
      description: 'Delivering world-class technology solutions that meet international standards and best practices.',
      icon: '🌍'
    },
    {
      title: 'Innovation Leadership',
      description: 'Pioneering cutting-edge technologies to drive digital transformation across industries.',
      icon: '🚀'
    },
    {
      title: 'Strategic Partnership',
      description: 'Building long-term relationships with enterprises to achieve sustainable competitive advantage.',
      icon: '🤝'
    },
    {
      title: 'Continuous Growth',
      description: 'Committed to continuous improvement and helping organizations scale in the digital economy.',
      icon: '📈'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Leafbyte Technology</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leafbyte Technology is a premier global technology consulting firm specializing in enterprise-grade 
              software development, cybersecurity solutions, and digital infrastructure management. With a proven 
              track record of delivering transformative technology solutions, we partner with organizations worldwide 
              to accelerate their digital evolution and achieve sustainable competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To enable global enterprises to thrive in the digital age through innovative technology solutions, 
                strategic consulting, and uncompromising commitment to excellence and security.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted technology partner, recognized for delivering transformative 
                solutions that drive innovation, enhance security, and create lasting value for businesses globally.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
