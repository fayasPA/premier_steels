import React, { useEffect } from 'react';
import ProductHero from '../components/ProductHero';
import ProductGrid from './../components/ProductGrid';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Save current scroll position before leaving
    return () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
  }, []);
  return (
    <div className='overflow-hidden'>
      <Helmet>
        <title>Our Products | Premier Steels</title>
        <meta
          name="description"
          content="Explore a wide range of high-quality steel products from Premier Steels, including MS Joints, MS Plates, MS Channels, Steel Pipes, and more. Trusted supplier of structural and industrial steel materials."
        />
        <meta
          name="keywords"
          content="steel products, MS Joints, MS Plates, MS Channels, Steel Supplier, Steel Pipes, Structural Steel, Industrial Steel, Premier Steels, Steel Bars, MS Flats, Steel Tubes, Galvanized Steel, Steel Plates, Steel for Construction, Steel Wholesale"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Products | Premier Steels" />
        <meta
          property="og:description"
          content="Discover a variety of steel products including MS Joints, Plates, Channels, Pipes, and more at Premier Steels. Serving the steel industry with top-quality materials."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thepremiersteels.com/products" />
        <meta property="og:image" content="https://www.thepremiersteels.com/assets/company_logo.jpg" />
        <link rel="canonical" href="https://www.thepremiersteels.com/products" />
      </Helmet>


      <ProductHero />
      <ProductGrid />


      {/*SEO SEgment hidden  keywords*/}
      <div className=" h-[1px] overflow-hidden bg-black pointer-events-none">
        <p>
          Steel, TMT, Steel distributor, Steel wholesale, Channels, Beam, Joists, Angle, Plates, Sail,
          Steel Suppliers, Steel Dealers, Steel Wholesalers, Steel Sheets, Stainless Steel Pipes, Mild
          Steel, Structural Steel, Steel Tubes, Industrial Steel Products, Steel Fabrication, Steel
          Sections, Metal Suppliers, Steel Construction Materials, Galvanized Steel, Reinforcement
          Steel, Heavy Steel Beams, Steel Bars, Steel Manufacturing, Vizag Steel Suppliers, Kerala
          Steel Suppliers, SAIL Steel Dealers, Steel Products for Construction, Durable Steel Materials,
          Stainless Steel Plates, Bulk Steel Supply, Custom Steel Solutions, Quality Steel Products,
          Affordable Steel Wholesaler, Trusted Steel Suppliers, Steel Distributor Near Me, Premium
          Quality Steel, India
        </p>
      </div>
      <div className="h-[1px] bg-black overflow-hidden">
        <h1 className="">Steel</h1>
        <h2 className="">TMT</h2>
        <h2 className="">Steel distributor</h2>
        <h2 className="">Steel wholesale</h2>
        <h2 className="">Channels</h2>
        <h2 className="">Beam</h2>
        <h2 className="">Joists</h2>
        <h2 className="">Angle</h2>
        <h2 className="">Plates</h2>
        <h2 className="">SAIL</h2>
        <h2 className="">Steel Suppliers</h2>
        <h2 className="">Steel Dealers</h2>
        <h2 className="">Steel Wholesalers</h2>
        <h2 className="">Steel Sheets</h2>
        <h2 className="">Stainless Steel Pipes</h2>
        <h2 className="">Mild Steel</h2>
        <h2 className="">Structural Steel</h2>
        <h2 className="">Steel Tubes</h2>
        <h2 className="">Industrial Steel Products</h2>
        <h2 className="">Steel Fabrication</h2>
        <h2 className="">Steel Sections</h2>
        <h2 className="">Metal Suppliers</h2>
        <h2 className="">Steel Construction Materials</h2>
        <h2 className="">Galvanized Steel</h2>
        <h2 className="">Reinforcement Steel</h2>
        <h2 className="">Heavy Steel Beams</h2>
        <h2 className="">Steel Bars</h2>
        <h2 className="">Steel Manufacturing</h2>
        <h2 className="">Kerala Steel Suppliers</h2>
        <h2 className="">SAIL Steel Dealers</h2>
        <h2 className="">Steel Products for Construction</h2>
        <h2 className="">Durable Steel Materials</h2>
        <h2 className="">Stainless Steel Plates</h2>
        <h2 className="">Bulk Steel Supply</h2>
        <h2 className="">Custom Steel Solutions</h2>
        <h2 className="">Quality Steel Products</h2>
        <h2 className="">Affordable Steel Wholesaler</h2>
        <h2 className="">Trusted Steel Suppliers</h2>
        <h2 className="">Steel Distributor Near Me</h2>
        <h2 className="">Premium Quality Steel</h2>
        <h2 className="">Indian Steel Supplier</h2>
      </div>
    </div>
  );
}

export default Products;
