import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useContactModal } from '@/hooks/useContactModal';
import { Turnstile } from '@marsidev/react-turnstile'
import axios from 'axios';

const BACKEND_URL = "https://bxyulwrquhicewftcdaj.supabase.co/functions/v1/super-responder";
const address = {
  street: 'Kathmandu',
  city: 'Nepal',
  postalCode: '44600'
};

const ContactModal = () => {
  const formRef = React.useRef({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const {
    toast
  } = useToast();
  const {
    isOpen,
    closeModal
  } = useContactModal();
  const services = ['Software Development', 'DevOps Solutions', 'Cloud Management', 'Cybersecurity Services', 'IT & Infrastructure Management', 'Network Management', 'General Inquiry'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current)
    try {
      const response = await axios.post(BACKEND_URL, {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        service: formData.get('service'),
        message: formData.get('message'),
        token: formData.get('cf-turnstile-response')
      });

      console.log('Success:', response.data);
      toast({
        type: "success",
        title: "Message Sent Successfully!",
        description: `Your inquiry has been routed to our ${formData.get('service')} team. We'll get back to you within 24 hours.`
      });

      formRef.current.reset();
      closeModal();

    } catch (error) {
      console.error('Error:', error);
      toast({
        type: "error",
        title: "Error Sending Message!",
        description: error?.response?.data?.error ?? `Please try again later or try sending us email directly.`
      });
    }

  };
  return <Sheet open={isOpen} onOpenChange={closeModal}>
    <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto bg-gradient-to-br from-green-50/90 via-emerald-50/90 to-teal-50/90 backdrop-blur-md">
      <SheetHeader className="mb-6">
        <SheetTitle className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
          Get in Touch
        </SheetTitle>
        <SheetDescription className="text-gray-600">
          Ready to transform your business? Let's discuss how we can help you achieve your technology goals.
        </SheetDescription>
      </SheetHeader>

      <div className="space-y-6">
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <Input id="name" name="name" type="text" required className="border-green-200 focus:border-green-500 focus:ring-green-500/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input id="email" name="email" type="email" required className="border-green-200 focus:border-green-500 focus:ring-green-500/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <Input id="company" name="company" type="text" className="border-green-200 focus:border-green-500 focus:ring-green-500/20" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Interested In *
                </label>
                <Select name="service" required>
                  <SelectTrigger className="border-green-200 focus:border-green-500 focus:ring-green-500/20">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <Textarea id="message" name="message" rows={4} required className="border-green-200 focus:border-green-500 focus:ring-green-500/20" placeholder="Tell us about your project or how we can help..." />
              </div>
              <Turnstile siteKey='0x4AAAAAABgXT__pQTlcoHYh' />
              <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-sm text-gray-600">admin@leafbyte.ltd</p>
                  <p className="text-sm text-gray-600">support@leafbyte.ltd</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-sm text-gray-600">+977-9844418804</p>
                  <p className="text-sm text-gray-600">24/7 Support Available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">Visit Us</h3>

                </div>

                <div className="text-sm text-gray-600">
                  <p>{address.street}</p>
                  <p>{address.city}</p>
                  <p>{address.postalCode}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              Why Choose Leafbyte?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3"></span>
                Expert team with 10+ years experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3"></span>
                24/7 support and maintenance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3"></span>
                Proven track record with 100+ projects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3"></span>
                Custom solutions tailored to your needs
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </SheetContent>
  </Sheet>;
};
export default ContactModal;