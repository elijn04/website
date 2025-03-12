import { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';

const blogCategories = [
  "All",
  "Tips & Tricks",
  "User Stories",
  "Insights",
  "Features",
  "Updates"
];

// Sample blog posts with more content
const allBlogPosts = [
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
  },
  {
    title: "New Feature: Split by Percentage",
    excerpt: "We're excited to announce our new feature that allows you to split bills by custom percentages. Perfect for roommates with different sized rooms!",
    date: "March 22, 2023",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Features",
    slug: "split-by-percentage"
  },
  {
    title: "Restaurant Etiquette: Who Pays the Bill?",
    excerpt: "Navigate the sometimes complex social norms around paying restaurant bills in different cultures and social settings.",
    date: "March 8, 2023",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Insights",
    slug: "restaurant-etiquette"
  },
  {
    title: "App Update: Improved OCR for Better Receipt Reading",
    excerpt: "Our latest update includes major improvements to our optical character recognition system for more accurate bill scanning.",
    date: "February 19, 2023",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Updates",
    slug: "improved-ocr"
  },
  {
    title: "How to Handle the Friend Who Never Pays You Back",
    excerpt: "We've all been there - that one friend who always 'forgets' to pay you back. Here's how to handle it without losing the friendship.",
    date: "February 5, 2023",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Tips & Tricks",
    slug: "friend-never-pays"
  },
  {
    title: "From Chaos to Clarity: My Group Vacation Expenses Story",
    excerpt: "A user shares how FLICK2SPLIT transformed their group vacation from a financial nightmare into a smooth experience.",
    date: "January 21, 2023",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "User Stories",
    slug: "vacation-expenses-story"
  },
  {
    title: "The Hidden Costs of Not Splitting Bills Properly",
    excerpt: "Explore how improper bill splitting can actually cost you money and strain relationships over time.",
    date: "January 8, 2023",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    category: "Insights",
    slug: "hidden-costs"
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(allBlogPosts);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Filter posts based on search query and selected category
    const filtered = allBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-flick-blue">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 px-4 hero-gradient">
        <div className="container mx-auto">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-flick-white mb-6">
              Latest Articles & Insights
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Stay up to date with the latest tips, stories, and updates from FLICK2SPLIT.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 px-4 bg-flick-blue-dark sticky top-0 z-30 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/2 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-flick-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-flick-yellow/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
              <Filter size={18} className="text-white/60 flex-shrink-0" />
              {blogCategories.map((category, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm transition-all ${
                    selectedCategory === category 
                      ? 'bg-flick-yellow text-flick-blue-dark font-medium' 
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                  >
                    <BlogCard 
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      imageUrl={post.imageUrl}
                      category={post.category}
                      slug={post.slug}
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="btn-secondary flex items-center gap-2">
                  Load More Articles
                  <ArrowRight size={16} />
                </button>
              </div>
            </>
          ) : (
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold text-flick-white mb-3">No articles found</h3>
              <p className="text-white/80 mb-4">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or search term.
              </p>
              <button 
                className="inline-flex items-center text-flick-yellow hover:text-white transition-colors font-medium"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
