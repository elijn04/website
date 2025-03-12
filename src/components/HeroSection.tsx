import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-gradient min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background curved shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-[40%] w-[60%] h-[60%] bg-flick-blue-light/20 blur-3xl -top-[10%] -right-[10%]"></div>
        <div className="absolute rounded-[40%] w-[45%] h-[45%] bg-flick-blue-light/10 blur-3xl -bottom-[5%] -left-[10%]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
          <div className={`max-w-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block bg-flick-yellow text-flick-blue-dark px-3 py-1 rounded-full text-sm font-medium mb-6">
              Bill splitting made simple
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-flick-white leading-tight mb-6">
              FLICK<span className="text-flick-yellow">2</span>SPLIT
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              The best bill splitting app for friends. Take a photo of your bill or upload one, and we'll handle the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#download" className="btn-primary flex items-center justify-center gap-2">
                Download Now
                <ArrowRight size={18} />
              </a>
              <a href="/how-to-use" className="btn-secondary flex items-center justify-center gap-2">
                Learn More
              </a>
            </div>
          </div>
          
          <img 
            src="/images/homepg.png" 
            alt="FLICK2SPLIT receipt example" 
            className={`md:absolute md:right-20 md:top-0 max-w-lg w-full h-auto transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
