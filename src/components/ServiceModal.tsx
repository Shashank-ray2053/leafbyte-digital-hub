
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { useContactModal } from '@/hooks/useContactModal';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: string;
    features: string[];
    benefits: string[];
    technologies: string[];
    process: string[];
  } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const { openModal } = useContactModal();

  if (!service) return null;

  const handleGetStarted = () => {
    onClose();
    openModal();
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-3xl overflow-y-auto bg-gradient-to-br from-emerald-50/90 via-teal-50/90 to-green-50/90 backdrop-blur-md">
        <SheetHeader className="mb-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <SheetTitle className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <div className="text-4xl">{service.icon}</div>
                {service.title}
              </SheetTitle>
              <SheetDescription className="text-lg text-gray-600 mt-2">
                {service.description}
              </SheetDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-gray-200/50"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-8">
          {/* Key Features */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg group hover:shadow-md transition-all duration-200">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-green-700">Technologies We Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 hover:scale-105">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700">Our Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="mb-4 opacity-90">Let's discuss how we can help transform your business with {service.title.toLowerCase()}.</p>
              <Button 
                onClick={handleGetStarted}
                className="bg-white text-emerald-600 hover:bg-gray-100 font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ServiceModal;
