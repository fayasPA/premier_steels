import React, { useEffect } from 'react'
import Blogs from './../components/BlogPage';
import BlogHero from '../components/BlogHero';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Steel Blog | Insights and Trends in Steel Industry | Premier Steels</title>
        <meta
          name="description"
          content="Explore steel industry insights, production techniques, grades, applications, and industry trends at Premier Steels' Blog."
        />
        <meta
          name="keywords"
          content="steel production, steel distribution, mild steel, steel properties, steel grades, steel industry trends, TMT bars, structural steel, Premier Steels blog"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Steel Blog | Premier Steels" />
        <meta property="og:description" content="Learn more about steel production, grades, and trends in the steel industry." />
        <meta property="og:image" content="https://www.thepremiersteels.com/assets/company_logo.jpg" />
        <meta property="og:url" content="https://www.thepremiersteels.com/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steel Blog | Premier Steels" />
        <meta name="twitter:description" content="Steel insights and industry trends for professionals." />
        <meta name="twitter:image" content="https://www.thepremiersteels.com/assets/company_logo.jpg" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.thepremiersteels.com/blog" />
      </Helmet>

      <BlogHero />
      <Blogs />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Premier Steels Blog",
        "description": "Learn about steel production, grades, and industry trends.",
        "url": "https://www.thepremiersteels.com/blog",
        "mainEntityOfPage": "https://www.thepremiersteels.com/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Premier Steels",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.thepremiersteels.com/assets/company_logo.jpg"
          }
        }
      }
      `}
      </script>
    </div>
  )
}

export default Blog;
