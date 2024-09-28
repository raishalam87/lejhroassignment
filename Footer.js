// Footer.js
import React from 'react';

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

import './Foote.css'

const Footer = () => {
  return (
    <div>
        <hr className='lines' />
    <footer className="bg-white text-white py-6">
        <div className='wrapper-section'>
           <div className='footer-home'>
              
              <div>
              <h3 className='footer-heading'>Company</h3>
              <a href="#" className="footer-itms">Innovations</a>
              <a href="#" className="footer-itms">Business Services</a>
              <a href="#" className="footer-itms">Financial servies</a>
              <a href="#" className="footer-itms">Lejhro Recurter</a>
              <a href="#" className="footer-itms">About</a>
              <a href="#" className="footer-itms">Blogs</a>
              </div>
              <div>
              <h3 className='footer-heading'>Program</h3>
              <a href="#" className="footer-itms">Lejhro Bootcamp</a>
              </div>
              <div>
              <h3 className='footer-heading'>Support</h3>
              <a href="#" className="footer-itms">Contact</a>
              <a href="#" className="footer-itms">Terms of Use</a>
              <a href="#" className="footer-itms">Privacy Statement</a>
              </div>
              <div>
                <h3 className='footer-heading'>Connect with us</h3>
                <div className='footer-icons'>
                <a href="#" className="footer-itms"> <FaTwitter className="w-6 h-6" /></a>
                <a href="#" className="footer-itms"><FaFacebookF className="w-6 h-6" /></a>
                <a href="#" className="footer-itms"><FaLinkedinIn className="w-6 h-6" /></a>
                <a href="#" className="footer-itms"><FaYoutube className="w-6 h-6" /></a>
                </div>
              </div>
           </div>
        </div>
        
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <div className="mb-4 md:mb-0">
          <p className='copyright'>&copy; 2024 Lejhro. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
    </div>
  );
};

export default Footer;
