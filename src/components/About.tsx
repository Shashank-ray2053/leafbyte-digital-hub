
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, ensuring exceptional results.',
      icon: '⭐'
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, working together towards success.',
      icon: '🤝'
    },
    {
      title: 'Growth',
      description: 'We are committed to continuous learning and helping our clients grow.',
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
              At Leafbyte Technology, we are passionate about transforming businesses through innovative technology solutions. 
              With years of experience in software development, DevOps, and IT infrastructure management, we help organizations 
              navigate the digital landscape with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth in an ever-evolving digital world.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading technology partner that businesses trust to transform their digital 
                infrastructure and achieve their strategic objectives through innovative solutions.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">Our Values</h3>
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
