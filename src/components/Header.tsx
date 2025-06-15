
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // Handle anchor links for home page
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-2xl font-bold text-blue-600 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            CLOFY
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('#services')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/solution-generator')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Solution Generator
            </button>
            <button 
              onClick={() => handleNavigation('#pricing')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('#contact')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-600"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/')} 
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('#services')} 
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('/solution-generator')} 
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Solution Generator
              </button>
              <button 
                onClick={() => handleNavigation('#pricing')} 
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleNavigation('#contact')} 
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="ghost" 
                  className="text-gray-600 w-full"
                  onClick={() => navigate('/signin')}
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
