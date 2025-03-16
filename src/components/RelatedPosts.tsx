import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type RelatedPostProps = {
  currentSlug: string;
};

// This could be expanded to dynamically fetch related posts based on tags
const RelatedPosts = ({ currentSlug }: RelatedPostProps) => {
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    // Sample posts - in a real app you might fetch these from an API or content system
    const allPosts = [
      {
        title: "How FLICK2SPLIT Saved My Friendship",
        slug: "saved-my-friendship",
        excerpt: "A real story from one of our users about how our app helped preserve a friendship."
      },
      {
        title: "Tips for Fair Bill Splitting",
        slug: "tips-for-fair-bill-splitting",
        excerpt: "Learn the best practices for splitting bills fairly among friends."
      }
    ];
    
    // Filter out current post
    setRelatedPosts(allPosts.filter(post => post.slug !== currentSlug));
  }, [currentSlug]);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <h3 className="text-xl font-bold text-flick-white mb-6">Related Articles</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {relatedPosts.map(post => (
          <Link 
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="glass-card p-6 transition-all hover:shadow-lg"
          >
            <h4 className="text-lg font-semibold text-flick-white mb-2">{post.title}</h4>
            <p className="text-white/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts; 