
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechStart Inc.',
      content: 'Leafbyte transformed our infrastructure completely. Their DevOps expertise reduced our deployment time by 80%.',
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      position: 'IT Director, Global Corp',
      content: 'Outstanding cloud migration services. They handled our complex requirements with professionalism and expertise.',
      company: 'Global Corp'
    },
    {
      name: 'Emily Rodriguez',
      position: 'CEO, InnovateLab',
      content: 'The custom software solution they built for us exceeded our expectations. Highly recommend their services.',
      company: 'InnovateLab'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-4xl mb-4">💬</div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
