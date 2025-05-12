import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className=" bg-yellow-100 text-orange-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3  gap-8">
       
        <div>
        <img className='w-[180px] h-[50px] mb-5 ' src="https://i.postimg.cc/BbYmnP4L/LOGO-findfest.png" alt="Logo" />
          <p className="mb-4 text-sm text-black">
            We build awesome digital products that improve lives.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target='_blank' className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://x.com/" target='_blank'  className="hover:text-blue-400"><FaSquareXTwitter /></a>
            <a href="https://www.instagram.com/" target='_blank'  className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target='_blank'  className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm text-black">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-black">
          <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-orange-200 text-center py-4 text-sm text-yellow-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
