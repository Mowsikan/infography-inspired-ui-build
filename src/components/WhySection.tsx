
import React from 'react';
import { Brain, CreditCard, TrendingUp, Shield } from 'lucide-react';

const WhySection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Data-driven cloud plans customized to your goals and industry manual research."
    },
    {
      icon: CreditCard,
      title: "Smart Credit Discovery",
      description: "Match with top programs like AWS Activate or GCP Start to unlock free credits."
    },
    {
      icon: TrendingUp,
      title: "Scale with Confidence",
      description: "From idea to startup to global enterprise, our solutions grow with you."
    },
    {
      icon: Shield,
      title: "Seamless & Secure Access",
      description: "SSO login via Gmail, GitHub, or LinkedIn for hassle-free sign-in."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why CLOFY?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
