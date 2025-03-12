import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Footer = () => {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to home page first
    navigate('/');
    // Then scroll to download section after a short delay
    setTimeout(() => {
      const downloadSection = document.getElementById('download');
      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <footer className="bg-flick-blue-dark text-flick-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              FLICK<span className="text-flick-yellow">2</span>SPLIT
            </h3>
            <p className="text-white/80 max-w-xs">
              The easiest way to split bills with friends. Just take a photo and let us handle the calculations.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Mail size={18} />} href="mailto:info@flick2split.com" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/how-to-use" label="How to Use" />
              <FooterLink href="/blog" label="Blog" />
              <li>
                <a 
                  href="#download" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={handleDownloadClick}
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="/privacy-policy" label="Privacy Policy" />
              <FooterLink href="/terms-of-service" label="Terms of Service" />
              <FooterLink href="/cookie-policy" label="Cookie Policy" />
              <FooterLink href="/gdpr" label="GDPR" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-white/80">Email: {siteConfig.contactEmail}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {siteConfig.copyright.year} {siteConfig.name}. {siteConfig.copyright.text}
          </p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 bg-flick-blue-light/20 hover:bg-flick-blue-light/30 p-3 rounded-full transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  const handleClick = () => {
    // If it's a hash link, don't scroll to top
    if (href.startsWith('#')) return;
    
    // For regular links, scroll to top after a short delay to allow navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <li>
      <Link 
        to={href} 
        className="text-white/80 hover:text-white transition-colors"
        onClick={handleClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;
