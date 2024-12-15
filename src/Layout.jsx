import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import FloatingBtn from './components/FloatingBtn';
import { bgImg } from './utils/constants';
import Loader from './components/Loader'; // Import your Loader component

const Layout = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false); // Modal visibility state
  const [selectedEnqProduct, setSelectedEnqProduct] = useState(null); // Placeholder for product data if needed

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="your-main-container bg-contain md:bg-contain bg-center min-h-screen flex flex-col"
    >
        <div className="bg-selBlack/90 flex-grow md:pb-0">
        <h1 className='hidden'>
          Premier Steels
        </h1>
          <FloatingBtn />
          <ToastContainer toastClassName="custom-toast" />
          <Navbar setIsEnquiryModalOpen={setIsEnquiryModalOpen} />

          <main className="flex-grow">
            <Outlet />

            <EnquiryModal
              isEnquiryModalOpen={isEnquiryModalOpen}
              setIsEnquiryModalOpen={setIsEnquiryModalOpen}
            />
          </main>

          <Footer setIsEnquiryModalOpen={setIsEnquiryModalOpen} />
        </div>
    </div>
  );
};

export default Layout;
