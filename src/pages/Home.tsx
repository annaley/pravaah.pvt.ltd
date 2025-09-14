import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Recycle, CheckCircle, ArrowRight, Award, Leaf, Globe, TrendingUp } from 'lucide-react';

const Home = () => {
  const valueProps = [
    {
      icon: Shield,
      title: "Compliance-as-a-Service",
      description: "End-to-end regulatory compliance management with CPCB certification tracking and automated reporting.",
      link: "/solutions"
    },
    {
      icon: TrendingUp,
      title: "ESG-as-a-Service",
      description: "Comprehensive ESG reporting and sustainability metrics to meet corporate environmental goals.",
      link: "/solutions"
    },
    {
      icon: Globe,
      title: "Secure Supply",
      description: "Reliable, scalable supply chain with guaranteed availability and consistent quality standards.",
      link: "/solutions"
    }
  ];

  const certifications = [
    { name: "CPCB Certified", desc: "Central Pollution Control Board" },
    { name: "BIS Standards", desc: "Bureau of Indian Standards" },
    { name: "ISO 14855", desc: "Biodegradability Testing" },
    { name: "ASTM D6400", desc: "Compostable Plastics" }
  ];

  const stats = [
    { number: "50+", label: "Corporate Partners" },
    { number: "100%", label: "CPCB Compliance" },
    { number: "75%", label: "Carbon Reduction" },
    { number: "24/7", label: "Supply Guarantee" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Award className="h-6 w-6 text-green-600" />
                <span className="text-green-600 font-semibold">CPCB Certified</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Compostable Packaging Built for{' '}
                <span className="text-green-600">Compliance</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Transform your packaging strategy with India's most trusted 
                compostable solutions, backed by comprehensive compliance and ESG services.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Request B2B Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/products/home"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-center transition-colors"
                >
                  Explore Pravaah Home
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{cert.name}</div>
                      <div className="text-gray-600 text-xs">{cert.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Compostable packaging solutions"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-green-600 text-white p-3 rounded-full">
                <Leaf className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-100 p-3 rounded-full">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Sustainability Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond packaging – we deliver comprehensive services that ensure compliance, 
              drive ESG goals, and secure your sustainable supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="group">
                <div className="bg-white border-2 border-gray-100 hover:border-green-200 p-8 rounded-xl transition-all duration-300 hover:shadow-lg h-full">
                  <div className="bg-green-100 group-hover:bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                    <prop.icon className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{prop.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{prop.description}</p>
                  
                  <Link
                    to={prop.link}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 lg:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                From Corporate Solutions to Home Essentials
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive range of CPCB-certified compostable packaging for businesses, 
                plus premium household products through our Pravaah Home collection.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">B2B: Flexible packaging, rigid containers, QSR solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">B2C: Garbage bags, food wraps, compostable tableware</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">All products: 100% compostable within 180 days</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  View All Products
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Request Samples
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img
                    src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Business packaging"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h4 className="font-semibold text-gray-900 text-sm">B2B Solutions</h4>
                  <p className="text-gray-600 text-xs">Corporate packaging</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img
                    src="https://images.pexels.com/photos/4207715/pexels-photo-4207715.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Home products"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h4 className="font-semibold text-gray-900 text-sm">Pravaah Home</h4>
                  <p className="text-gray-600 text-xs">Household essentials</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img
                    src="https://images.pexels.com/photos/7656740/pexels-photo-7656740.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="QSR solutions"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h4 className="font-semibold text-gray-900 text-sm">QSR Ready</h4>
                  <p className="text-gray-600 text-xs">Food service</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <img
                    src="https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Certified materials"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h4 className="font-semibold text-gray-900 text-sm">CPCB Certified</h4>
                  <p className="text-gray-600 text-xs">Verified compostable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Packaging?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join leading companies in making the switch to compliant, sustainable packaging solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Get B2B Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/certifications"
              className="border-2 border-white text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Download Compliance Checklist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;