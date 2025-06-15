
import React, { useState } from 'react';
import { Upload, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';

const SolutionGenerator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [context, setContext] = useState('');
  const [activeTab, setActiveTab] = useState('service');
  const navigate = useNavigate();

  const services = [
    'Cloud Consultation',
    'Cloud Migration',
    'Cloud Security',
    'DevOps & Automation',
    'Backup & Recovery'
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What cloud challenge can we solve for you?</h2>
            <p className="text-blue-200 text-lg">
              Select a service or describe your challenge to see your tailored plan here.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex space-x-8 mb-8">
              <button
                onClick={() => setActiveTab('service')}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === 'service' 
                    ? 'border-blue-400 text-blue-400' 
                    : 'border-transparent text-gray-300'
                }`}
              >
                By Service
              </button>
              <button
                onClick={() => setActiveTab('suggestions')}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === 'suggestions' 
                    ? 'border-blue-400 text-blue-400' 
                    : 'border-transparent text-gray-300'
                }`}
              >
                Suggested Solutions
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Select Service(s):</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-3">
                      <Checkbox
                        id={service}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                        className="border-white/30"
                      />
                      <label 
                        htmlFor={service}
                        className="text-white cursor-pointer hover:text-blue-300 transition-colors"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Upload Architecture & Docs:</h3>
                <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300">
                    Click or drag & drop to upload diagrams, logs, or whitepapers
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Your Context:</h3>
                <Textarea
                  placeholder="Describe your current setup or goals..."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-[120px]"
                />
              </div>

              <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                <ul className="space-y-2 text-blue-200 mb-4">
                  <li>• Optimize Kubernetes cost</li>
                  <li>• Explore AWS Activate credits</li>
                  <li>• Secure multi-cloud architecture</li>
                </ul>
                
                <div className="space-y-3">
                  <Button 
                    onClick={() => navigate('/solution-generator')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Open Advanced Generator
                  </Button>
                  
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Generate Quick Solution (1 credit)
                  </Button>
                </div>
                
                <p className="text-sm text-blue-300 text-center mt-4">
                  Tip: Not enough credits? 
                  <a href="#pricing" className="text-blue-400 hover:underline ml-1">
                    Purchase 50 Credits for $10
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionGenerator;
