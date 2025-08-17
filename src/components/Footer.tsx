import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Speedy Homes</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in real estate investments. Fast, reliable, and professional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/buy-box" className="text-gray-400 hover:text-white transition-colors">Buy Box</Link></li>
              <li><Link to="/jv-form" className="text-gray-400 hover:text-white transition-colors">JV Partnership</Link></li>
              <li><Link to="/partner-program" className="text-gray-400 hover:text-white transition-colors">Partner Program</Link></li>
              <li><Link to="/dispo-hub" className="text-gray-400 hover:text-white transition-colors">Dispo Hub</Link></li>
              <li><Link to="/underwriting" className="text-gray-400 hover:text-white transition-colors">Free Underwriting</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Property Investment</span></li>
              <li><span className="text-gray-400">Deal Analysis</span></li>
              <li><span className="text-gray-400">Market Research</span></li>
              <li><span className="text-gray-400">Investment Consulting</span></li>
              <li><span className="text-gray-400">Portfolio Management</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">contact@speedyhomes.co</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">123 Business St, City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Speedy Homes. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;