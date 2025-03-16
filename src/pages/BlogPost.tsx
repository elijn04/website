import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import SeoHead from '@/components/SeoHead';
import OptimizedImage from '@/components/OptimizedImage';
import RelatedPosts from '@/components/RelatedPosts';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// This is a dynamic import function to load blog content
const importBlogPost = async (slug: string) => {
  try {
    // Dynamically import the blog post content
    const module = await import(`@/content/blog/${slug}.tsx`);
    return {
      Content: module.default,
      metadata: module.post
    };
  } catch (error) {
    console.error("Failed to load blog post:", error);
    return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        const postData = await importBlogPost(slug);
        if (postData) {
          setPost(postData);
          setError(false);
          
          // Track page view for analytics
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_view', {
              page_title: postData.metadata.title,
              page_path: `/blog/${slug}`
            });
          }
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error loading blog post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-flick-blue flex items-center justify-center">
        <div className="animate-pulse text-flick-white text-xl">Loading post...</div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="min-h-screen bg-flick-blue">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-flick-white mb-4">Post Not Found</h1>
          <p className="text-white/80 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const { Content, metadata } = post;
  const canonicalUrl = `https://flick2split.com/blog/${slug}`;
  
  return (
    <div className="min-h-screen bg-flick-blue">
      <SeoHead
        title={`${metadata.title} | FLICK2SPLIT`}
        description={metadata.excerpt}
        canonicalUrl={canonicalUrl}
        ogImage={metadata.imageUrl}
        ogType="article"
        keywords={metadata.keywords || []}
      />
      
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${metadata.title}",
              "image": "${metadata.imageUrl}",
              "author": {
                "@type": "Person",
                "name": "${metadata.author.name}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "FLICK2SPLIT",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://flick2split.com/logo.png"
                }
              },
              "datePublished": "${metadata.date}",
              "dateModified": "${metadata.date}",
              "description": "${metadata.excerpt}",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${canonicalUrl}"
              }
            }
          `}
        </script>
      </Helmet>
      
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://flick2split.com/' },
          { name: 'Blog', url: 'https://flick2split.com/blog' },
          { name: metadata.title, url: canonicalUrl }
        ]}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95)), url(${metadata.imageUrl})` 
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
            
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              {metadata.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-flick-white mb-6 leading-tight">
              {metadata.title}
            </h1>
            
            <div className="flex items-center text-white/70 space-x-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{metadata.date}</span>
              </div>
              
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{metadata.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4 bg-flick-blue-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto glass-card p-8 md:p-12">
            <div className="flex items-center mb-8 pb-8 border-b border-white/10">
              <img 
                src={metadata.author.avatar} 
                alt={`Photo of ${metadata.author.name}`}
                className="w-12 h-12 rounded-full mr-4 object-cover"
                loading="eager"
              />
              <div>
                <h3 className="text-flick-white font-medium">{metadata.author.name}</h3>
                <p className="text-white/60 text-sm">Author</p>
              </div>
            </div>
            
            <OptimizedImage 
              src={metadata.imageUrl} 
              alt={metadata.title}
              className="w-full h-auto rounded-xl mb-8"
            />
            
            <Content />
            
            {/* Tags Section */}
            {metadata.keywords && (
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-flick-white mb-4">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {metadata.keywords.map((keyword: string, index: number) => (
                    <Link 
                      key={index}
                      to={`/blog?tag=${encodeURIComponent(keyword)}`}
                      className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm text-white/80"
                    >
                      {keyword}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Related Posts */}
            <RelatedPosts currentSlug={slug || ''} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost; 