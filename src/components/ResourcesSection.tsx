
import React from 'react';
import { ArrowRight, BookOpen, Shield, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Maximizing AWS Activate Credits",
      description: "Learn how to qualify, apply, and optimize your AWS Credits.",
      link: "#"
    },
    {
      icon: Shield,
      title: "Secure Multi-Cloud Architecture",
      description: "Design robust security controls across AWS, GCP and Azure.",
      link: "#"
    },
    {
      icon: GitBranch,
      title: "Automating DevOps Pipelines",
      description: "Implement CI/CD workflows that scale with your team.",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <div 
              key={resource.title}
              className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors">
                <resource.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
              <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                Read the Blog
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
