import { Link, useNavigate } from 'react-router-dom';
import { Twitter, Instagram, ArrowUp, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site';

// Add TikTok icon component since it's not in lucide-react
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Add this component definition before the Footer component
interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon = ({ icon, href }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/80 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

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
              <SocialIcon icon={<Twitter size={18} />} href="https://x.com/flick2split?s=11&t=S9Jsc8EVivJsl7IKmy-zpQ" />
              <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/flick2split?igsh=cTQwd3p1ZnY2ZXh3" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/company/flick2split/" />
              <SocialIcon icon={<TikTokIcon size={18} />} href="https://www.tiktok.com/@flick2split?_t=ZT-8uqps92OdHq&_r=1" />
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
