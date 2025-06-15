
import React from 'react';
import { Cloud, Database, Shield, GitBranch, RotateCcw, Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Consultation",
      description: "Personalized architecture blueprints and best practices."
    },
    {
      icon: Database,
      title: "Migration & Modernization",
      description: "Seamless workload moves with data integrity checks."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Vulnerability scans and audit-ready reports."
    },
    {
      icon: GitBranch,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, IaC, and faster deployments."
    },
    {
      icon: RotateCcw,
      title: "Backup & Recovery",
      description: "RTO/RPO planning and automated backup strategies."
    },
    {
      icon: Code,
      title: "Credit Program Explorer",
      description: "Eligibility checks and application support for credits."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
