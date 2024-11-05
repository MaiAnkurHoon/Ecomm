import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white p-8 border-t border-gray-300 " >
      <div className="flex justify-between max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700 ">
        {/* Logo and Contact Info */}
        <div className="space-y-4">
          {/* <img src="/path-to-your-logo.png" alt="Kajaria Logo" className="h-8" /> */}
          <h3 className='text-3xl'>Galaxy Tiles and Ceramics</h3>
          <div>
            <h3 className="text-lg font-semibold">Call</h3>
            <p className="text-blue-600 font-medium">1800 309 309</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-blue-600 font-medium">info@galaxytiles.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li>Metallic Ceramic Tiles</li>
            <li>Wood Wall Tiles</li>
            <li>Rustic Kitchen Wall Tiles</li>
            <li>Where To Buy</li>
            <li>Corporate Office</li>
            <li>Display Centers / Offices</li>
            <li>Blog</li>
            <li>Login/Register</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="mt-2 space-y-1">
            <li>Company Information</li>
            <li>Chairman's Message</li>
            <li>Our Exports</li>
            <li>Awards & Certifications</li>
            <li>Rustic Wall Tiles</li>
            <li>Tiles</li>
            <li>Metallic Kitchen Tiles</li>
            <li>Manufacturing Facilities</li>
          </ul>
        </div>
      </div>

      {/* Products Section */}
      <div className="border-t border-gray-300 mt-8 pt-4">
        <h3 className="text-lg font-semibold">Products</h3>
        <div className="flex flex-wrap mt-2 text-gray-600">
          <p className="mr-4">Bathroom Tiles</p>|
          <p className="mx-4">Kitchen Tiles</p>|
          <p className="mx-4">Wall Tiles</p>|
          <p className="mx-4">Floor Tiles</p>|
          <p className="mx-4">Vitrified Tiles</p>|
          <p className="mx-4">Ceramic Tiles</p>|
          <p className="mx-4">Polished Vitrified Tiles</p>|
          <p className="mx-4">Eternity - Glazed Vitrified Tiles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
