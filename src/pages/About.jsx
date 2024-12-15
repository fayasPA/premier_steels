import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import MiniAbout from '../components/MiniAbout';
import AboutFounderSection from '../components/AboutFounderSection';
import { Helmet } from 'react-helmet-async';
import AboutCards from '../components/AboutCards';
import StatisticsSection from '../components/StatisticsSection ';
import { companyPhoneNo } from '../utils/constants';

const About = () => {
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
        <title>About Us | Premier Steels</title>
        <meta name="description" content="Learn about Premier Steels, a leading steel supplier with a strong mission, values, and dedicated team delivering quality steel products." />
        <meta name="keywords" content="Premier Steels, about us, steel supplier, steel products, steel company, steel manufacturing, steel team, company values, founder" />
        <meta name="author" content="Premier Steels" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thepremiersteels.com/about" />
        <meta property="og:title" content="About Us | Premier Steels" />
        <meta property="og:description" content="Learn about Premier Steels, a leading steel supplier with a strong mission, values, and dedicated team delivering quality steel products." />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Premier Steels",
            "url": "https://www.thepremiersteels.com",
            "logo": "https://www.thepremiersteels.com/assets/company_logo.jpg",
            "description": "Premier Steels is a leading steel supplier offering a range of high-quality steel products and services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Stock Yard, Pullepady Road",
              "addressLocality": "Ernakulam",
              "postalCode": "628017",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": `${companyPhoneNo}`,
              "contactType": "Customer Support",
              "areaServed": "IN",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/people/Premier-Steels/100070995211277/",
              "https://www.instagram.com/premiersteelsindia/"
            ]
          }}
        />
      </Helmet>
      <AboutHero /> {/* this has the video */}
      <AboutCards />
      {/* <MiniAbout /> optional  */}
      <AboutFounderSection />
      <StatisticsSection />
    </div>
  );
}

export default About;
