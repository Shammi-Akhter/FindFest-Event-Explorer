import React, { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      <Toaster />
      <Navbar />

      {loading && (
        <div className="fixed inset-0 z-50 bg-white/70 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
