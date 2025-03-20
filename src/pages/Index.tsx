import { useState, useEffect } from 'react';
import { Camera, Upload, Calculator, Users, Clock, Bell, ArrowRight, Download, SplineIcon, SplitIcon, DivideCircleIcon, DivideIcon, Divide, LucideDivideSquare, Share2Icon, EyeOffIcon, EyeIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import BlogCard from '@/components/BlogCard';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isIntersecting, setIsIntersecting] = useState<{ [key: string]: boolean }>({
    features: false,
    howToUse: false,
    testimonials: false,
    blog: false,
    download: false
  });

  const { toast } = useToast();

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
    <div className="min-h-screen bg-flick-blue overflow-x-hidden">
      <Navbar />
      
      <HeroSection />
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-500 ${isIntersecting.features ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-flick-white mb-4">
              Split bills with ease
            </h2>
            <p className="text-white/80 text-lg">
              FLICK2SPLIT makes splitting bills with friends simple and hassle-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            <FeatureCard 
              icon={Camera} 
              title="Snap a Photo" 
              description="Take a photo of your bill, and our advanced OCR will recognize all items automatically."
              delay={100}
            />
            <FeatureCard 
              icon={SplitIcon} 
              title="Group Splitting" 
              description="Our algorithm fairly splits each person's share, including tax and tip. No manual math needed!"
              delay={300}
            />
              <FeatureCard 
              icon={Share2Icon} 
              title="Split Shared Items" 
              description="Dividing a pizza? Splitting an appetizer? Select portions like ½, ⅓, or ¼ to ensure fairness."
              delay={400}
            />
            <FeatureCard 
              icon={Calculator} 
              title="Tip Calculation" 
              description="Our smart algorithm calculates the tip from the subtotal."
              delay={200}
            />

            <FeatureCard 
              icon={EyeIcon} 
              title="Transparent Bill Breakdown" 
              description="See exactly who owes what, with itemized costs, tax, and tip displayed clearly."
              delay={500}
            />
            <FeatureCard 
              icon={Upload} 
              title="Send a Summary" 
              description="Share a clean, itemized bill breakdown with your group via text or email, no confusion!"
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* How to Use Section */}
      <section id="howToUse" className="py-20 px-4 relative bg-flick-blue-dark">
        <div 
          className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-flick-blue to-transparent"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-500 ${isIntersecting.howToUse ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              How to Use
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-flick-white mb-4">
              Simple as 1, 2, 3
            </h2>
            <p className="text-white/80 text-lg">
              Using FLICK2SPLIT is incredibly easy. Here's how it works:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard 
              number={1} 
              title="Take a Photo" 
              description="Snap a photo of your bill or upload one from your gallery."
              isVisible={isIntersecting.howToUse}
              delay={100}
            />
            <StepCard 
              number={2} 
              title="Assign Items" 
              description="Select who had what items, or split items equally between friends."
              isVisible={isIntersecting.howToUse}
              delay={300}
            />
            <StepCard 
              number={3} 
              title="Split & Share" 
              description="Calculate the split and share it with your friends via any app."
              isVisible={isIntersecting.howToUse}
              delay={500}
            />
          </div>
          
          <div className={`text-center mt-12 transition-all duration-500 delay-700 ${isIntersecting.howToUse ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a href="/how-to-use" className="inline-flex items-center text-flick-yellow hover:text-white transition-colors font-medium">
              Learn more about how to use FLICK2SPLIT
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 relative bg-flick-blue">
        <div className="container mx-auto">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-500 ${isIntersecting.testimonials ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-flick-white mb-4">
              What our users say
            </h2>
            <p className="text-white/80 text-lg">
              Don't just take our word for it. Here's what our users have to say about FLICK2SPLIT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-animation">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                isVisible={isIntersecting.testimonials}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section Preview */}
      <section id="blog" className="py-20 px-4 relative bg-flick-blue-dark">
        <div className="container mx-auto">
          <div className={`flex flex-col md:flex-row justify-between items-center mb-12 transition-all duration-500 ${isIntersecting.blog ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <div>
              <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-3">
                Our Blog
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-flick-white">
                Latest Articles
              </h2>
            </div>
            <a 
              href="/blog" 
              className="mt-4 md:mt-0 inline-flex items-center text-flick-yellow hover:text-white transition-colors font-medium"
            >
              View all articles
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageUrl={post.imageUrl}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Download App Section */}
      <section id="download" className="py-20 px-4 relative bg-flick-blue text-center">
        <div className="container mx-auto max-w-4xl">
          <div className={`bg-gradient-to-r from-flick-blue-light to-flick-blue-dark rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-500 ${isIntersecting.download ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-flick-white mb-6">
              Download FLICK2SPLIT Today
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of friends who are already enjoying hassle-free bill splitting.
              Available on iOS and Android.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://apps.apple.com/us/app/flick2split/id6743105325" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download for iOS
              </a>
              <button 
                onClick={() => {
                  toast({
                    title: "Coming Soon!",
                    description: "Android version is currently in development.",
                    duration: 3000
                  });
                }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Step Card Component
const StepCard = ({ number, title, description, isVisible, delay = 0 }: 
  { number: number; title: string; description: string; isVisible: boolean; delay?: number }) => {
  return (
    <div 
      className={`glass-card p-6 text-center transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-flick-yellow text-flick-blue-dark rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-flick-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, name, title, isVisible, delay = 0 }: 
  { quote: string; name: string; title: string; isVisible: boolean; delay?: number }) => {
  return (
    <div 
      className={`glass-card p-6 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg className="h-8 w-8 text-flick-yellow mb-4" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-white/90 mb-4">{quote}</p>
      <div>
        <p className="font-semibold text-flick-white">{name}</p>
        <p className="text-white/70 text-sm">{title}</p>
      </div>
    </div>
  );
};

// Sample blog posts
const blogPosts = [
  {
    title: "5 Tips for Fair Bill Splitting with Friends",
    excerpt: "Learn how to avoid awkward money situations with friends by following these simple bill-splitting etiquette tips.",
    date: "May 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Tips & Tricks",
    slug: "tips-for-fair-bill-splitting"
  },
  {
    title: "How FLICK2SPLIT Saved My Friendship",
    excerpt: "A real story from one of our users about how our app helped preserve a friendship that was strained by money issues.",
    date: "April 28, 2023",
    imageUrl: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "User Stories",
    slug: "saved-my-friendship"
  },
  {
    title: "The Psychology of Money Between Friends",
    excerpt: "Explore the complex dynamics of money in friendships and why clear financial boundaries matter.",
    date: "April 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Insights",
    slug: "psychology-of-money"
  }
];

// Sample testimonials
const testimonials = [
  {
    quote: "FLICK2SPLIT has completely changed how my friends and I handle group expenses. No more awkward conversations about who owes what!",
    name: "Sarah Johnson",
    title: "App User for 8 months"
  },
  {
    quote: "I used to avoid group dinners because splitting the bill was such a pain. Now I'm the one organizing them because this app makes it so easy.",
    name: "Michael Chen",
    title: "App User for 1 year"
  },
  {
    quote: "The photo recognition feature is incredible - it saves so much time not having to manually input every item from the receipt.",
    name: "Emily Rodriguez",
    title: "App User for 6 months"
  }
];

export default Index;
