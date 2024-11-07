import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroContactsSection from '../components/HeroContactsSection';
import { Helmet } from 'react-helmet-async';
import ContactsContentSection from '../components/ContactsContentSection';
import { companyEmail, companyPhoneNo } from '../utils/constants';

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-zinc text-white">
      <Helmet>
        <title>Contact Us | Premier Steels</title>
        <meta 
          name="description" 
          content="Get in touch with Premier Steels, a leading steel supplier. Reach out to us for inquiries, customer support, and more. Contact Premier Steels for high-quality steel products and services." 
        />
        <meta 
          name="keywords" 
          content="contact Premier Steels, steel supplier contact, steel inquiries, customer support, steel products, steel supplier, Premier Steels contact information, get in touch with Premier Steels" 
        />
        <meta 
          name="robots" 
          content="index, follow" 
        />
        <meta 
          property="og:title" 
          content="Contact Us | Premier Steels" 
        />
        <meta 
          property="og:description" 
          content="Contact Premier Steels for your steel product inquiries. Reach our support team for more information on our products and services." 
        />
        <meta 
          property="og:type" 
          content="website" 
        />
        <meta 
          property="og:url" 
          content="https://www.thepremiersteels.com/contact" 
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "name": "Premier Steels",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Stock Yard, Pullepady Road",
                  "addressLocality": "Ernakulam",
                  "postalCode": "628017",
                  "addressCountry": "IN"
                },
                "telephone": `${companyPhoneNo}`,
                "email": `${companyEmail}`,
                "url": "https://www.thepremiersteels.com"
              }
              )
          }}
        />
      </Helmet>

      <HeroContactsSection /> {/* Video section */}
      <ContactsContentSection />

    </div>
  );
};

export default Contacts;
