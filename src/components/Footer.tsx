import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Pravaah Pvt. Ltd.</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of CPCB-certified compostable packaging solutions, 
              driving sustainability through innovative compliance and ESG services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Manufacturing Hub, Industrial Area, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contact@pravaah.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-300 hover:text-green-400">Compliance-as-a-Service</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-green-400">ESG-as-a-Service</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-green-400">Supply Security</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-green-400">CPCB Certification</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-green-400">Success Stories</Link></li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/flexible" className="text-gray-300 hover:text-green-400">Flexible Packaging</Link></li>
              <li><Link to="/products/rigid" className="text-gray-300 hover:text-green-400">Rigid Containers</Link></li>
              <li><Link to="/products/thermoformed" className="text-gray-300 hover:text-green-400">QSR Solutions</Link></li>
              <li><Link to="/products/home" className="text-gray-300 hover:text-green-400">Pravaah Home</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400">Request Samples</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest sustainability insights and compliance updates.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 lg:mb-0">
            <Link to="/about" className="text-gray-300 hover:text-green-400">About</Link>
            <Link to="/careers" className="text-gray-300 hover:text-green-400">Careers</Link>
            <Link to="/investors" className="text-gray-300 hover:text-green-400">Investors</Link>
            <Link to="/contact" className="text-gray-300 hover:text-green-400">Contact</Link>
            <span className="text-gray-300">Privacy Policy</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-6">
          © 2024 Pravaah Pvt. Ltd. All rights reserved. | CPCB Certified Compostable Packaging Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;