import React from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../assets/images/company_logo_bg.png'; // Update the path to your image
import contactImage from '../assets/images/company_logo_bg.png'; // Contact image
import directionImage from '../assets/images/company_logo_bg.png'; // Direction image

import { FaArrowRight, FaArrowUp, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import { companyEmail, companyPhoneNo, featuredProjects, productsList } from '../utils/constants';
import { FiMail, FiYoutube } from 'react-icons/fi';
import { MdOutlineCall } from 'react-icons/md';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaArrowUpLong } from 'react-icons/fa6';

function Footer({ setIsEnquiryModalOpen }) {
  return (
    <footer>
      <div className='bg-red-950 text-white h-auto flex flex-col justify-center items-center py-5 md:py-10'>
        <div className='space-y-1 md:space-y-5 flex flex-col justify-center items-center'>
          <div className='text-center text-xl md:text-5xl font-thin mb-1 md:mb-0'>
            <h1 className=''>Request a Quote Online <span className='font-bold text-white'>24/7</span></h1>
            {/* <h1 className='block md:hidden'>Request a Quote</h1>
            <h1 className='block md:hidden font-bold text-white'>Online 24/7</h1> */}
          </div>

          <button className="request-button"
            onClick={() => setIsEnquiryModalOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <span className="text">Request a Quote</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
          </button>


        </div>
        <div className='mt-2 text-xs md:text-base text-white' onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}>
          <h1 >or call +91 {companyPhoneNo}</h1>
        </div>
      </div>

      {/* Larger screens */}
      <div className="hidden md:block bg-black md:px-20 py-5 md:py-14">
        {/* Footer Section */}
        {/* Left Section: Logo, Company Name, and Tagline */}
        <div className="flex flex-col md:items-center md:mb-4 lg:mb-0 lg:mr-8 text-[#a9a9a9]">
          <NavLink to="/" className="flex items-center" aria-label="Go to homepage">
            <div className="bg-selRed-400 rounded-full p-2 flex items-center">
              <img
                src={companyLogo}
                alt="Premier Steels company logo"
                className="w-5 h-5 lg:w-10 lg:h-6 transition-all duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
            <h1 className="company-font-only text-2xl md:text-3xl font-semibold md:font-bold text-white">
              Premier Steels
            </h1>
          </NavLink>
          <div className='hidden md:flex w-full justify-center'>
            <p className="text-xs md:text-sm text-white">
              Quality • Strength • Durability
            </p>
          </div>
          <div className="h-[1px] w-[60%] bg-lineGray mt-5 hidden md:block"></div>
        </div>

        {/* Location, Products, Information, and Contact Sections */}
        <div className="flex flex-col lg:flex-row lg:justify-around text-[#a9a9a9] space-y-2 md:space-y-10 lg:space-y-0 md:mt-8 pl-2 md:pl-0">
          {/* Location Section */}
          <section className="flex flex-col items-start text-center lg:items-start lg:text-left order-1">
            <h4 className="font-bold text-sm mb-2 hidden md:block">LOCATION</h4>
            <p className="text-xs md:text-xs">STOCK YARD, PULLEPADY ROAD</p>
            <p className="text-xs md:text-xs">ERNAKULAM, PIN: 628017</p>
          </section>

          {/* Products Section */}
          <section className="flex flex-col items-start  md:text-center lg:items-start lg:text-left order-3 md:order-2">
            <h4 className="font-bold text-sm mb-2">PRODUCTS</h4>
            <ul className="space-y-1 text-xs md:text-xs text-lineGray">
              {productsList.slice(0, 5).map((prod, index) => (
                <li key={index} className="uppercase">{prod.title}</li>
              ))}
            </ul>
          </section>

          {/* Information Section */}
          <section className="flex flex-col items-start  md:text-center lg:items-start lg:text-left order-4 md:order-3">
            <h4 className="font-bold text-sm mb-2">INFORMATION</h4>
            <ul className="space-y-1 text-xs md:text-xs text-lineGray">
              <li><NavLink to="/" aria-label="Home">HOME</NavLink></li>
              <li><NavLink to="/products" aria-label="View Products">PRODUCTS</NavLink></li>
              <li><NavLink to="/blog" aria-label="Read our Blog">BLOG</NavLink></li>
              <li><NavLink to="/about" aria-label="About Us">ABOUT</NavLink></li>
              <li><NavLink to="/contact" aria-label="Contact Us">CONTACT</NavLink></li>
            </ul>
          </section>

          {/* Contact Us Section */}
          <section className="flex flex-col items-start text-center lg:items-end lg:text-left order-2 md:order-4 pb-5 md:pb-0">
            <h4 className="font-bold text-sm mb-2 hidden md:block">CONTACT US</h4>
            <span
              className="cursor-pointer text-xs md:text-xs flex items-center gap-1 uppercase"
              onClick={() => window.location.href = `mailto:${companyEmail}`}
              aria-label="Email us"
            >
              <FiMail className="text-xl" /> {companyEmail}
            </span>
            <span
              className="cursor-pointer text-xs md:text-xs flex items-center gap-1"
              onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}
              aria-label={`Call ${companyPhoneNo}`}
            >
              <MdOutlineCall className="text-xl" /> +91 {companyPhoneNo}
            </span>

            <div className="flex md:hidden items-center gap-5 w-full flex-1 text-white pt-4">
              <a
                href={`https://wa.me/+91${companyPhoneNo}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp size="1.5rem" className="cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com/people/Premier-Steels/100070995211277/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <AiOutlineFacebook size="1.5rem" className="cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/premiersteelsindia/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram size="1.5rem" className="cursor-pointer" />
              </a>
              <a
                href={`tel:+91${companyPhoneNo}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label={`Call us at +91${companyPhoneNo}`}
              >
                <MdOutlineCall size="1.5rem" className="cursor-pointer" />
              </a>
            </div>
          </section>
        </div>

        <div className="hidden md:flex justify-center lg:justify-center items-center gap-4 pb-2 lg:pb-2 w-full flex-1 text-white pt-12">
          <a
            href={`https://wa.me/+91${companyPhoneNo}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp size="1.5rem" className="cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/people/Premier-Steels/100070995211277/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Visit our Facebook page"
          >
            <AiOutlineFacebook size="1.5rem" className="cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/premiersteelsindia/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram size="1.5rem" className="cursor-pointer" />
          </a>
          <a
            href={`tel:+91${companyPhoneNo}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label={`Call us at +91${companyPhoneNo}`}
          >
            <MdOutlineCall size="1.5rem" className="cursor-pointer" />
          </a>
        </div>
      </div>



      {/* smaller screens */}
      <div className="block md:hidden bg-black text-[#a9a9a9] py-5">
        <footer>
          <div className="text-center text-white mb-4">
            <div className="flex justify-center items-center">
              <div className="bg-selRed-400 rounded-full px-2 flex items-center">
                <img
                  src={companyLogo}
                  alt="Premier Steels company logo"
                  className="w-8 h-5 lg:w-10 lg:h-6 transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
              <h1 className="text-xl font-semibold">Premier Steels</h1>
            </div>
            <p className="text-[.6rem]">Quality • Strength • Durability</p>
          </div>

          <div className="text-center space-y-2 text-xs text-[#a9a9a9]">
            {/* Location Section */}
            <section>
              <h4 className="font-bold">LOCATION</h4>
              <address className='not-italic'>
                <p>STOCK YARD, PULLEPADY ROAD</p>
                <p>ERNAKULAM, PIN: 628017</p>
              </address>
            </section>

            {/* Products and Information Sections */}
            <div className="flex text-center justify-center items-center gap-20">
              <section>
                <h4 className="font-bold text-sm mb-2">PRODUCTS</h4>
                <ul className="space-y-1">
                  {productsList.slice(0, 5).map((prod, index) => (
                    <li key={index} className="uppercase">{prod.title}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="font-bold text-sm mb-2">INFORMATION</h4>
                <ul className="space-y-1 text-xs">
                  <li><NavLink to="/" aria-label="Go to home page">HOME</NavLink></li>
                  <li><NavLink to="/products" aria-label="View products">PRODUCTS</NavLink></li>
                  <li><NavLink to="/blog" aria-label="Read our blog">BLOG</NavLink></li>
                  <li><NavLink to="/about" aria-label="Learn more about us">ABOUT</NavLink></li>
                  <li><NavLink to="/contact" aria-label="Contact us">CONTACT</NavLink></li>
                </ul>
              </section>
            </div>

            {/* Contact Section */}
            <section>
              <h4 className="font-bold mt-3">CONTACT</h4>
              <address className='not-italic'>
                <span
                  onClick={() => window.location.href = `mailto:${companyEmail}`}
                  className="cursor-pointer block"
                  aria-label={`Email us at ${companyEmail}`}
                >
                  Email: {companyEmail}
                </span>
                <span
                  onClick={() => window.location.href = `tel:+91${companyPhoneNo}`}
                  className="cursor-pointer block"
                  aria-label={`Call us at +91 ${companyPhoneNo}`}
                >
                  Phone: +91 {companyPhoneNo}
                </span>
              </address>
            </section>
          </div>

          {/* Social Media Links Section */}
          <div className="flex justify-center gap-4 pt-4 text-white">
            <a
              href={`https://wa.me/+91${companyPhoneNo}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp size="1.5rem" />
            </a>
            <a
              href="https://www.facebook.com/people/Premier-Steels/100070995211277/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our Facebook page"
            >
              <AiOutlineFacebook size="1.5rem" />
            </a>
            <a
              href="https://www.instagram.com/premiersteelsindia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size="1.5rem" />
            </a>
            <a
              href={`tel:+91${companyPhoneNo}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Call us at +91 ${companyPhoneNo}`}
            >
              <MdOutlineCall size="1.5rem" />
            </a>
          </div>
        </footer>
      </div>


      {/* powered by section */}
      <div className="text-lineGray py-1 md:py-2 bg-black">
        <footer className="container mx-auto md:px-5">
          <div className="flex flex-col md:flex-row items-center md:justify-center">
            <div className="flex flex-col text-right md:text-center w-full items-end md:items-center text-[.5rem] md:text-[.6rem]">

              {/* Copyright Section */}
              <section className="flex items-center justify-end md:justify-center space-x-2">
                <p className="font-medium">
                  ©2024&nbsp;
                  <span className="uppercase">Premier Steels |</span>
                  &nbsp;All Rights Reserved.
                </p>
              </section>

              {/* Powered By Section */}
              <section className="flex flex-col md:flex-row items-center md:justify-center space-y-2 md:space-y-0 md:space-x-2">
                <p className="text-[.5rem] md:text-[.6rem] scale-90 md:scale-95 font-medium">
                  Powered by
                  <a
                    href="https://cyfletech.com"
                    className="text-blue ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Cyfletech website"
                  >
                    <strong className="font-normal text-white">Cyfletech</strong>
                  </a>
                </p>
              </section>
            </div>
          </div>
        </footer>
      </div>


    </footer>
  );
}

export default Footer;
