
import { useState, useEffect } from 'react';
import { Camera, Users, CreditCard, Share2, BarChart, Settings, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const HowToUse = () => {
  const [isIntersecting, setIsIntersecting] = useState<{ [key: string]: boolean }>({
    intro: false,
    steps: false,
    tips: false,
    faq: false,
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px',
      threshold: 0.1
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-flick-blue">
      <Navbar />
      
      {/* Header */}
      <section id="intro" className="pt-32 pb-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-500 ${isIntersecting.intro ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-flick-white mb-6">
              How to Use FLICK2SPLIT
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              A comprehensive guide to splitting bills with friends using our intuitive app. Follow these simple steps to make bill-splitting a breeze.
            </p>
          </div>
        </div>
      </section>
      
      {/* Step by Step Guide */}
      <section id="steps" className="py-20 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          <div className={`max-w-3xl mx-auto mb-16 transition-all duration-500 ${isIntersecting.steps ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl font-bold text-flick-white mb-6 text-center">
              Step-by-Step Guide
            </h2>
            <p className="text-white/80 text-lg text-center mb-12">
              Follow these steps to quickly and easily split bills with your friends.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <StepGuide 
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isVisible={isIntersecting.steps}
                delay={index * 150}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tips and Tricks */}
      <section id="tips" className="py-20 px-4 bg-flick-blue">
        <div className="container mx-auto">
          <div className={`max-w-3xl mx-auto mb-16 transition-all duration-500 ${isIntersecting.tips ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto text-center block w-fit">
              Tips & Tricks
            </span>
            <h2 className="text-3xl font-bold text-flick-white mb-6 text-center">
              Get the Most Out of FLICK2SPLIT
            </h2>
            <p className="text-white/80 text-lg text-center">
              These helpful tips will make your bill-splitting experience even better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-animation">
            {tips.map((tip, index) => (
              <TipCard 
                key={index}
                title={tip.title}
                description={tip.description}
                isVisible={isIntersecting.tips}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          <div className={`max-w-3xl mx-auto mb-16 transition-all duration-500 ${isIntersecting.faq ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4 mx-auto text-center block w-fit">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-flick-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-white/80 text-lg text-center">
              Get answers to the most common questions about using FLICK2SPLIT.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQ 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isVisible={isIntersecting.faq}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Download CTA */}
      <section className="py-20 px-4 bg-flick-blue text-center">
        <div className="container mx-auto max-w-4xl">
          <div className={`bg-gradient-to-r from-flick-blue-light to-flick-blue-dark rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-700 ${isIntersecting.faq ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-flick-white mb-6">
              Ready to Split Bills with Ease?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Download FLICK2SPLIT now and start enjoying hassle-free bill splitting with your friends today.
            </p>
            
            <a href="/#download" className="btn-primary inline-flex items-center justify-center gap-2">
              Download the App
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Step Guide Component
const StepGuide = ({ number, title, description, icon: Icon, isVisible, delay = 0, isLast = false }: 
  { number: number; title: string; description: string; icon: any; isVisible: boolean; delay?: number; isLast?: boolean }) => {
  return (
    <div className="relative">
      <div 
        className={`flex flex-col md:flex-row gap-6 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-flick-yellow text-flick-blue-dark rounded-full flex items-center justify-center text-xl font-bold z-10 relative">
            {number}
          </div>
          {!isLast && (
            <div className="w-0.5 h-24 bg-white/10 absolute left-7 top-14 z-0"></div>
          )}
        </div>
        
        <div className="glass-card p-6 flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Icon size={24} className="text-flick-white" />
            </div>
            <h3 className="text-xl font-semibold text-flick-white">{title}</h3>
          </div>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
      
      {!isLast && <div className="h-8"></div>}
    </div>
  );
};

// Tip Card Component
const TipCard = ({ title, description, isVisible, delay = 0 }: 
  { title: string; description: string; isVisible: boolean; delay?: number }) => {
  return (
    <div 
      className={`glass-card p-6 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="inline-block h-2 w-8 bg-flick-yellow rounded-full mb-4"></span>
      <h3 className="text-xl font-semibold text-flick-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

// FAQ Component
const FAQ = ({ question, answer, isVisible, delay = 0 }: 
  { question: string; answer: string; isVisible: boolean; delay?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className={`glass-card overflow-hidden transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button 
        className="w-full px-6 py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-flick-white">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ArrowRight size={18} className="text-flick-white rotate-90" />
        </span>
      </button>
      
      <div 
        className={`px-6 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/80">{answer}</p>
      </div>
    </div>
  );
};

// Sample data
const steps = [
  {
    title: "Download and Install",
    description: "Download FLICK2SPLIT from the App Store or Google Play and follow the simple installation process. Create an account or sign in using your existing social accounts.",
    icon: Settings
  },
  {
    title: "Capture Your Bill",
    description: "Take a clear photo of your bill using the in-app camera or upload an existing image from your gallery. Our OCR technology will automatically recognize items and prices.",
    icon: Camera
  },
  {
    title: "Add Friends",
    description: "Add your friends to the split by selecting them from your contacts or by entering their names manually. You can also create and save groups for frequent bill-splitting scenarios.",
    icon: Users
  },
  {
    title: "Assign Items",
    description: "Assign each item to the person who ordered it, or split items between multiple people. You can also easily handle shared items like appetizers or bottle service.",
    icon: BarChart
  },
  {
    title: "Adjust and Confirm",
    description: "Review the split, adjust tax and tip as needed, and confirm the final amounts. The app will calculate exactly how much each person owes.",
    icon: CreditCard
  },
  {
    title: "Share the Results",
    description: "Share the split results with your friends via text, email, or your favorite messaging app. Friends can also receive payment reminders if they haven't settled up.",
    icon: Share2
  }
];

const tips = [
  {
    title: "📸 Take a Clear Photo",
    description: "Place the receipt on a flat surface and take a well-lit photo to ensure accurate scanning."
  },
  {
    title: "🧾 Capture Full Receipt",
    description: "Make sure all items, totals, and tax are visible, partial receipts may not scan correctly."
  },
  {
    title: "📊 Double-Check",
    description: "Always quickly review the auto-detected items to ensure accuracy, especially in low-light restaurants."
  },
  {
    title: "🍕 Split Shared Items",
    description: "Tap on an item to divide it among multiple people, choose fractions like ½, ⅓, or ¼."
  },
  {
    title: "📤 Share the Bill Summary",
    description: "Send a detailed breakdown via text or email, make sure everyone knows what they owe!"
  }
];

const faqs = [

  {
    question: "Can I split a bill unequally between friends?",
    answer: "Yes! FLICK2SPLIT allows for both equal splits and item-by-item assignment. You can assign specific items to different people or split individual items between multiple people in any proportion you choose."
  },
  {
    question: "What if the OCR misreads some items on my bill?",
    answer: "While our OCR technology is highly accurate, you can always manually edit any items that weren't correctly recognized. Simply tap on the item and adjust the name, price, or quantity as needed."
  },
  {
    question: "Can I include tax and tip in my split?",
    answer: "Yes, FLICK2SPLIT automatically handles tax and tip. You can choose to split these equally among all participants or proportionally based on each person's subtotal. You can also set custom tip amounts or percentages."
  },
  {
    question: "Does everyone in my group need to have the app?",
    answer: "No, only the person calculating the split needs to have the app. You can share the split results with your friends via text, email, or any messaging app, and they'll receive a detailed breakdown of what they owe."
  }
];

export default HowToUse;
