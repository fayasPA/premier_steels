import React, { useEffect } from 'react';
import SteelProductsShowcase from '../components/Products';
import Hero from '../components/Hero';
import MiniAbout from './../components/MiniAbout';
import StrategicPartners from '../components/Partners';
import { Helmet } from 'react-helmet-async';

function Home() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);
  return (
    <div className=''>
      <Helmet>
        <title>Premier Steels | Quality Steel Products</title>
        <meta name="description" content="Explore Premier Steels' high-quality steel products, strategic partnerships, and commitment to excellence in steel manufacturing. We offer MS Joints, MS Channels, TMT Bars, Beams, and more." />
        <meta name="keywords" content="Premier Steels, Steel Products, TMT Bars, MS Channels, Beams, Steel Wholesale, Steel Manufacturing, Steel Suppliers, Steel Dealers, Industrial Steel" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Premier Steels | Quality Steel Products" />
        <meta property="og:description" content="Discover top-tier steel products at Premier Steels. From MS Joints to TMT Bars, explore a wide range of steel solutions for your construction needs." />
        <meta property="og:url" content="https://thepremiersteels.com" />
        <meta property="og:image" content="https://www.thepremiersteels.com/assets/company_logo.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <SteelProductsShowcase />
      <MiniAbout />
      <StrategicPartners />

      {/* Ensure all content is relevant and doesn't just target keywords */}
      <div className="hidden">
        <p>Explore Premier Steels' offerings: MS Joints, MS Channels, TMT Bars, Beams, and more. We supply a variety of high-quality steel products for construction and manufacturing industries.</p>
      </div>

      <div className="hidden">
        <h1>Premier Steels - Leading Steel Supplier</h1>
        <h2>Steel Products</h2>
        <h2>Steel Manufacturing</h2>
        <h2>Industrial Steel Solutions</h2>
        <h2>Custom Steel Solutions</h2>
      </div>
    </div>
  );
}

export default Home;
