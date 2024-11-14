import React from 'react';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { companyPhoneNo } from '../utils/constants';

const FloatingBtn = () => {
  return (
    <div className="fixed bottom-0 left-4 md:left-auto md:right-4 z-50">
      <a
        href={`https://wa.me/+91${companyPhoneNo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn-shadow bg-white/75 text-selRed flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-t-lg shadow-2xl shadow-black hover:scale-105 transition-transform animate-pulse"
        aria-label="Message us on WhatsApp"
      >
        <span className="text-sm md:text-xl font-normal" aria-hidden="true">Leave a message</span>
        <MdOutlineWhatsapp className="text-xl md:text-2xl" alt="WhatsApp icon" aria-hidden="true"/>
      </a>
    </div>
  );
};

export default FloatingBtn;
