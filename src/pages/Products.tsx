import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag, Utensils, Home, ArrowRight, CheckCircle, Download } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Package,
      title: "Flexible Packaging",
      description: "Films, pouches, and wraps for food and consumer goods",
      image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products/flexible",
      products: ["Stand-up pouches", "Food wrap films", "Barrier pouches", "Laminated films"]
    },
    {
      icon: ShoppingBag,
      title: "Rigid Containers",
      description: "Durable containers for storage and transport applications",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products/rigid",
      products: ["Food containers", "Storage boxes", "Clamshells", "Trays & lids"]
    },
    {
      icon: Utensils,
      title: "Thermoformed (QSR)",
      description: "Food service solutions for restaurants and quick service",
      image: "https://images.pexels.com/photos/7656740/pexels-photo-7656740.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products/thermoformed",
      products: ["Takeaway containers", "Cutlery sets", "Cups & bowls", "Portion containers"]
    },
    {
      icon: Home,
      title: "Pravaah Home",
      description: "Premium compostable products for household use",
      image: "https://images.pexels.com/photos/4207715/pexels-photo-4207715.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/products/home",
      products: ["Garbage bags", "Food storage wraps", "Compostable tableware", "Kitchen essentials"]
    }
  ];

  const certifications = [
    "CPCB Certified Compostable",
    "BIS Quality Standards",
    "ISO 17088 Compliance",
    "ASTM D6400 Certified",
    "EN 13432 European Standard",
    "Food Grade Safe"
  ];

  const features = [
    {
      title: "100% Compostable",
      description: "Complete biodegradation within 180 days in industrial composting conditions"
    },
    {
      title: "Performance Matched",
      description: "Equivalent strength, barrier properties, and shelf life to conventional plastic"
    },
    {
      title: "Food Safe",
      description: "FDA and BIS approved materials suitable for direct food contact"
    },
    {
      title: "Custom Solutions",
      description: "Tailored designs, sizes, and specifications for specific application needs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Product Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              CPCB-certified compostable packaging solutions for every application – 
              from corporate B2B requirements to premium household products through Pravaah Home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Request Samples</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of compostable packaging solutions designed 
              for specific applications and performance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white p-3 rounded-lg">
                    <category.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Products:</h4>
                    <ul className="space-y-2">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={category.link}
                    className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold group-hover:space-x-3 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Superior performance with environmental responsibility, 
              backed by comprehensive certifications and quality guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600">
              All products meet the highest international standards for compostability and safety.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Request samples, get custom quotes, or explore our complete product specifications.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Request B2B Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/products/home"
              className="border-2 border-white text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Shop Pravaah Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;