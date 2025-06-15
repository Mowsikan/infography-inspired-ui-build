
import React, { useState } from 'react';
import { Upload, Zap, FileText, Download, CheckCircle, ArrowRight, Cloud, Database, Shield, GitBranch, RotateCcw, Code, X, Plus, Calendar, BookOpen, MessageCircle, HelpCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const SolutionGenerator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [context, setContext] = useState('');
  const [activeTab, setActiveTab] = useState('service');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSolution, setGeneratedSolution] = useState<any>(null);

  const services = [
    'Cloud Consultation',
    'Cloud Migration', 
    'Cloud Security',
    'DevOps & Automation',
    'Backup & Recovery'
  ];

  const sidebarItems = [
    { title: 'Generate Solution', icon: Zap, active: true },
    { title: 'My Solutions', icon: FileText },
    { title: 'Calendar', icon: Calendar }
  ];

  const resourceItems = [
    { title: 'Newsletter', icon: BookOpen },
    { title: 'Docs', icon: FileText },
    { title: 'Webinars', icon: Calendar }
  ];

  const supportItems = [
    { title: 'Live Chat', icon: MessageCircle },
    { title: 'Help Center', icon: HelpCircle }
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const generateSolution = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockSolution = {
        title: "Customized Cloud Solution",
        benefits: [
          "Optimize Kubernetes cost",
          "Explore AWS Activate credits", 
          "Secure multi-cloud architecture"
        ]
      };
      
      setGeneratedSolution(mockSolution);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-blue-100 flex flex-col shadow-sm">
        {/* Logo */}
        <div className="p-6 border-b border-blue-100">
          <h1 className="text-2xl font-bold text-blue-600">CLOFY</h1>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </div>
            ))}
          </nav>

          {/* Upgrade Button */}
          <div className="mt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
              Upgrade to Premium
            </Button>
          </div>

          {/* Resources Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <nav className="space-y-2">
              {resourceItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Support Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
            <nav className="space-y-2">
              {supportItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg cursor-pointer transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-blue-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">your.email@dom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Content Area */}
        <div className="flex-1 p-8 bg-white">
          <div className="max-w-2xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                What cloud challenge can we solve for you?
              </h1>
              <div className="flex space-x-8 mb-6">
                <button
                  onClick={() => setActiveTab('service')}
                  className={`pb-2 border-b-2 transition-colors font-medium ${
                    activeTab === 'service' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-400 hover:text-blue-600'
                  }`}
                >
                  By Service
                </button>
                <button
                  onClick={() => setActiveTab('suggestions')}
                  className={`pb-2 border-b-2 transition-colors font-medium ${
                    activeTab === 'suggestions' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-400 hover:text-blue-600'
                  }`}
                >
                  Suggested Solutions
                </button>
              </div>
            </div>

            {/* Service Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Service(s):</h3>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="space-y-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-3">
                      <Checkbox
                        id={service}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                        className="border-blue-300"
                      />
                      <label 
                        htmlFor={service}
                        className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Architecture & Docs:</h3>
              <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 text-center hover:border-blue-400 transition-colors bg-blue-50/50">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Click or drag & drop to upload diagrams, logs, or whitepapers
                  </p>
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-700">{file.name}</span>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Context */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Context:</h3>
              <Textarea
                placeholder="Describe your current setup or goals..."
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="bg-white border-blue-200 text-gray-700 placeholder:text-gray-400 min-h-[120px] focus:border-blue-400"
              />
            </div>

            {/* Generate Button */}
            <div className="space-y-4">
              <Button
                onClick={generateSolution}
                disabled={isGenerating || selectedServices.length === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-lg transition-all duration-300"
              >
                {isGenerating ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Generating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Generate My Cloud Solution (1 credit)
                  </div>
                )}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Tip: Not enough credits? 
                <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
                  Purchase 50 Credits for $10
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Preview Area */}
        <div className="w-1/3 bg-blue-50 border-l border-blue-100 p-8">
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Select a service or describe your challenge to see your tailored plan here.
            </p>
          </div>

          {!generatedSolution && !isGenerating && (
            <div className="text-center py-12">
              <Cloud className="w-16 h-16 text-blue-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Your customized cloud solution will appear here after generation.
              </p>
            </div>
          )}

          {isGenerating && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Analyzing your requirements...</p>
            </div>
          )}

          {generatedSolution && (
            <div className="space-y-6 animate-fade-in">
              <ul className="space-y-3">
                {generatedSolution.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionGenerator;
