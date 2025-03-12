import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, date, imageUrl, category, slug }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block h-full">
      <div className="glass-card overflow-hidden h-full flex flex-col transition-transform hover:scale-[1.02]">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-flick-yellow/90 text-flick-blue-dark px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="text-white/60 text-sm mb-2">{date}</div>
          
          <h3 className="text-xl font-semibold text-flick-white mb-3 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-white/80 mb-4 line-clamp-3 flex-1">
            {excerpt}
          </p>
          
          <div className="text-flick-yellow font-medium text-sm flex items-center">
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
