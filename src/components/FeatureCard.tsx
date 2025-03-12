
import { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`feature-gradient rounded-2xl p-6 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-white/10 rounded-xl inline-block mb-4">
        <Icon size={24} className="text-flick-white" />
      </div>
      <h3 className="text-xl font-semibold text-flick-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export default FeatureCard;
