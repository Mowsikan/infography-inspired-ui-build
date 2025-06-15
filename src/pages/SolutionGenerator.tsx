
import React, { useState } from 'react';
import { Upload, Zap, FileText, Download, CheckCircle, ArrowRight, Cloud, Database, Shield, GitBranch, RotateCcw, Code, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SolutionGenerator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [context, setContext] = useState('');
  const [activeTab, setActiveTab] = useState('service');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [priority, setPriority] = useState('cost');
  const [currentStack, setCurrentStack] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSolution, setGeneratedSolution] = useState<any>(null);

  const services = [
    { id: 'consultation', name: 'Cloud Consultation', icon: Cloud, description: 'Architecture blueprints and best practices' },
    { id: 'migration', name: 'Cloud Migration', icon: Database, description: 'Seamless workload transitions' },
    { id: 'security', name: 'Cloud Security', icon: Shield, description: 'Vulnerability scans and compliance' },
    { id: 'devops', name: 'DevOps & Automation', icon: GitBranch, description: 'CI/CD pipelines and IaC' },
    { id: 'backup', name: 'Backup & Recovery', icon: RotateCcw, description: 'RTO/RPO planning and strategies' },
    { id: 'credits', name: 'Credit Program Explorer', icon: Code, description: 'Eligibility checks and applications' }
  ];

  const suggestedSolutions = [
    { title: 'Startup Cloud Setup', description: 'Complete cloud infrastructure for new startups', services: ['consultation', 'migration', 'security'] },
    { title: 'Enterprise Migration', description: 'Large-scale enterprise cloud migration', services: ['migration', 'security', 'devops'] },
    { title: 'Security Audit', description: 'Comprehensive security assessment', services: ['security', 'backup'] },
    { title: 'DevOps Transformation', description: 'Modernize development workflows', services: ['devops', 'migration'] }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const selectSuggestedSolution = (solution: any) => {
    setSelectedServices(solution.services);
    setContext(solution.description);
  };

  const generateSolution = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockSolution = {
        title: "Customized Cloud Solution",
        overview: "Based on your requirements, we've designed a comprehensive cloud strategy that optimizes for cost, security, and scalability.",
        architecture: {
          compute: "AWS EC2 with auto-scaling groups",
          storage: "S3 buckets with lifecycle policies",
          database: "RDS with read replicas",
          networking: "VPC with private subnets"
        },
        timeline: "6-8 weeks implementation",
        estimatedCost: "$2,500-4,000/month",
        steps: [
          "Initial assessment and planning (Week 1)",
          "Infrastructure setup (Weeks 2-3)",
          "Migration and testing (Weeks 4-5)",
          "Security implementation (Week 6)",
          "Monitoring and optimization (Weeks 7-8)"
        ],
        benefits: [
          "60% cost reduction in first year",
          "99.9% uptime guarantee",
          "Automated backup and recovery",
          "Enhanced security posture"
        ]
      };
      
      setGeneratedSolution(mockSolution);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cloud Solution Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a personalized cloud strategy tailored to your business needs. 
              Our AI analyzes your requirements and generates a comprehensive solution.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                  {/* Tab Navigation */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                    <div className="flex space-x-8">
                      <button
                        onClick={() => setActiveTab('service')}
                        className={`pb-2 border-b-2 transition-all duration-300 font-medium ${
                          activeTab === 'service' 
                            ? 'border-white text-white' 
                            : 'border-transparent text-blue-200 hover:text-white'
                        }`}
                      >
                        By Service
                      </button>
                      <button
                        onClick={() => setActiveTab('suggestions')}
                        className={`pb-2 border-b-2 transition-all duration-300 font-medium ${
                          activeTab === 'suggestions' 
                            ? 'border-white text-white' 
                            : 'border-transparent text-blue-200 hover:text-white'
                        }`}
                      >
                        Suggested Solutions
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    {activeTab === 'service' ? (
                      <div className="space-y-8">
                        {/* Service Selection */}
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Select Services</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service) => (
                              <div
                                key={service.id}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                                  selectedServices.includes(service.id)
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-blue-300'
                                }`}
                                onClick={() => handleServiceToggle(service.id)}
                              >
                                <div className="flex items-start space-x-3">
                                  <Checkbox
                                    checked={selectedServices.includes(service.id)}
                                    onChange={() => handleServiceToggle(service.id)}
                                    className="mt-1"
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <service.icon className="w-5 h-5 text-blue-600" />
                                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">{service.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="budget" className="text-lg font-medium text-gray-900 mb-2 block">
                              Monthly Budget
                            </Label>
                            <Input
                              id="budget"
                              placeholder="e.g., $5,000"
                              value={budget}
                              onChange={(e) => setBudget(e.target.value)}
                              className="text-lg"
                            />
                          </div>
                          <div>
                            <Label htmlFor="timeline" className="text-lg font-medium text-gray-900 mb-2 block">
                              Timeline
                            </Label>
                            <Input
                              id="timeline"
                              placeholder="e.g., 3 months"
                              value={timeline}
                              onChange={(e) => setTimeline(e.target.value)}
                              className="text-lg"
                            />
                          </div>
                          <div>
                            <Label htmlFor="teamSize" className="text-lg font-medium text-gray-900 mb-2 block">
                              Team Size
                            </Label>
                            <Input
                              id="teamSize"
                              placeholder="e.g., 5-10 developers"
                              value={teamSize}
                              onChange={(e) => setTeamSize(e.target.value)}
                              className="text-lg"
                            />
                          </div>
                          <div>
                            <Label className="text-lg font-medium text-gray-900 mb-3 block">
                              Priority
                            </Label>
                            <RadioGroup value={priority} onValueChange={setPriority}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="cost" id="cost" />
                                <Label htmlFor="cost">Cost Optimization</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="performance" id="performance" />
                                <Label htmlFor="performance">Performance</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="security" id="security" />
                                <Label htmlFor="security">Security</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>

                        {/* Current Stack */}
                        <div>
                          <Label htmlFor="currentStack" className="text-lg font-medium text-gray-900 mb-2 block">
                            Current Technology Stack
                          </Label>
                          <Textarea
                            id="currentStack"
                            placeholder="Describe your current infrastructure, technologies, and tools..."
                            value={currentStack}
                            onChange={(e) => setCurrentStack(e.target.value)}
                            className="min-h-[100px] text-lg"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Suggested Solutions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {suggestedSolutions.map((solution, index) => (
                            <div
                              key={index}
                              className="p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                              onClick={() => selectSuggestedSolution(solution)}
                            >
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h4>
                              <p className="text-gray-600 mb-4">{solution.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {solution.services.map(serviceId => {
                                  const service = services.find(s => s.id === serviceId);
                                  return service ? (
                                    <span key={serviceId} className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                      <service.icon className="w-3 h-3 mr-1" />
                                      {service.name}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* File Upload */}
                    <div className="border-t pt-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Documents</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                          accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                        />
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                          <p className="text-sm text-gray-500">Architecture diagrams, requirements, logs, etc.</p>
                        </label>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <FileText className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-700">{file.name}</span>
                              </div>
                              <button
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Context */}
                    <div className="border-t pt-8">
                      <Label htmlFor="context" className="text-lg font-semibold text-gray-900 mb-4 block">
                        Additional Context
                      </Label>
                      <Textarea
                        id="context"
                        placeholder="Describe your specific requirements, challenges, or goals..."
                        value={context}
                        onChange={(e) => setContext(e.target.value)}
                        className="min-h-[120px] text-lg"
                      />
                    </div>

                    {/* Generate Button */}
                    <div className="border-t pt-8">
                      <Button
                        onClick={generateSolution}
                        disabled={isGenerating || selectedServices.length === 0}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105"
                      >
                        {isGenerating ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Generating Your Solution...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Zap className="w-5 h-5 mr-2" />
                            Generate My Cloud Solution (1 credit)
                          </div>
                        )}
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-3">
                        Need more credits? 
                        <a href="#pricing" className="text-blue-600 hover:underline ml-1">
                          Purchase 50 Credits for $10
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                      <h3 className="text-xl font-semibold text-white">Generated Solution</h3>
                    </div>

                    <div className="p-6">
                      {!generatedSolution && !isGenerating && (
                        <div className="text-center py-12">
                          <Cloud className="w-16 h-16 text-gray-300 mx-auto mb-4" />
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
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {generatedSolution.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {generatedSolution.overview}
                            </p>
                          </div>

                          <div className="border-t pt-4">
                            <h5 className="font-semibold text-gray-900 mb-3">Key Benefits</h5>
                            <ul className="space-y-2">
                              {generatedSolution.benefits.map((benefit: string, index: number) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="border-t pt-4">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div className="bg-blue-50 rounded-lg p-3">
                                <p className="text-xs text-blue-600 font-medium">Timeline</p>
                                <p className="text-sm font-semibold text-gray-900">
                                  {generatedSolution.timeline}
                                </p>
                              </div>
                              <div className="bg-green-50 rounded-lg p-3">
                                <p className="text-xs text-green-600 font-medium">Est. Cost</p>
                                <p className="text-sm font-semibold text-gray-900">
                                  {generatedSolution.estimatedCost}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                              <Download className="w-4 h-4 mr-2" />
                              Download Full Report
                            </Button>
                            <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Schedule Consultation
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SolutionGenerator;
