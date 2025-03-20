import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Handle scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top when a link is clicked
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-flick-blue-dark/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <span className="text-2xl font-bold text-flick-white">
              FLICK<span className="text-flick-yellow">2</span>SPLIT
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" onClick={handleLinkClick} />
            <NavLink to="/how-to-use" label="How to Use" onClick={handleLinkClick} />
            <NavLink to="/blog" label="Blog" onClick={handleLinkClick} />
            <Button 
              className="bg-flick-yellow hover:bg-flick-yellow/90 text-flick-blue-dark font-medium"
              onClick={() => {
                const downloadSection = document.getElementById('download');
                if (downloadSection) {
                  downloadSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Download App
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-flick-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-flick-blue-dark/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" label="Home" mobile onClick={handleLinkClick} />
              <NavLink to="/how-to-use" label="How to Use" mobile onClick={handleLinkClick} />
              <NavLink to="/blog" label="Blog" mobile onClick={handleLinkClick} />
              <Button 
                className="bg-flick-yellow hover:bg-flick-yellow/90 text-flick-blue-dark font-medium w-full"
                onClick={() => {
                  const downloadSection = document.getElementById('download');
                  if (downloadSection) {
                    downloadSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Download App
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, label, mobile, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`transition-colors ${
        mobile 
          ? 'text-lg py-2' 
          : ''
      } ${
        isActive 
          ? 'text-flick-yellow font-medium' 
          : 'text-flick-white hover:text-flick-yellow'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
