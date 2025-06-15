
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions or need a custom solution? We're here to help!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-200">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Us a Message
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg hover:scale-105 transition-all duration-200">
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
