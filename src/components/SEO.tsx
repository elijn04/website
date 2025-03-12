import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description = siteConfig.description,
  canonical,
  ogImage = '/images/og-image.jpg',
  noindex = false
}: SEOProps) => {
  const siteTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} - ${siteConfig.description}`;
  
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO; 