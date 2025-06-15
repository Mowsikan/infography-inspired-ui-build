
import React from 'react';
import { CheckCircle, Settings, Zap } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: CheckCircle,
      title: "Choose Your Services",
      description: "Select from Cloud Consultation, Migration, Security, DevOps, and more via our smart dropdown."
    },
    {
      number: 2,
      icon: Settings,
      title: "Customize Your Request",
      description: "Tell us your context: 'What's your current cloud setup?' or 'How will you use these services?'"
    },
    {
      number: 3,
      icon: Zap,
      title: "Generate Your Solution",
      description: "Click 'Generate My Cloud Solution' to receive an AI-crafted plan (1 credit per solution)."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-6">
                {step.number}
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
