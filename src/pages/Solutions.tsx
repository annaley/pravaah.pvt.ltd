import React from 'react';
import { Shield, TrendingUp, Globe, CheckCircle, ArrowRight, FileText, BarChart3, Clock } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Compliance-as-a-Service",
      description: "Complete regulatory compliance management with automated tracking, reporting, and CPCB certification maintenance.",
      features: [
        "CPCB certification tracking & renewal",
        "Automated compliance reporting",
        "Regulatory change monitoring",
        "Audit preparation & support",
        "Documentation management",
        "Risk assessment & mitigation"
      ],
      benefits: [
        "Reduce compliance overhead by 80%",
        "Eliminate regulatory risks",
        "Automated reporting saves 20+ hours/month"
      ]
    },
    {
      icon: TrendingUp,
      title: "ESG-as-a-Service",
      description: "Comprehensive ESG reporting and sustainability metrics to meet corporate environmental goals and investor requirements.",
      features: [
        "Carbon footprint measurement",
        "Sustainability impact tracking",
        "ESG report generation",
        "Stakeholder communication",
        "Target setting & monitoring",
        "Third-party verification support"
      ],
      benefits: [
        "Meet investor ESG requirements",
        "Improve sustainability ratings",
        "Demonstrate measurable impact"
      ]
    },
    {
      icon: Globe,
      title: "Secure Supply",
      description: "Reliable, scalable supply chain with guaranteed availability, consistent quality standards, and strategic inventory management.",
      features: [
        "Guaranteed supply agreements",
        "Strategic inventory management",
        "Quality consistency protocols",
        "Supply chain optimization",
        "Demand forecasting",
        "Emergency backup systems"
      ],
      benefits: [
        "99.5% on-time delivery guarantee",
        "Zero quality variations",
        "Reduced procurement costs by 15%"
      ]
    }
  ];

  const engagementProcess = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current packaging needs, compliance requirements, and sustainability goals.",
      icon: FileText
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description: "Tailored service package combining appropriate solutions with clear implementation roadmap.",
      icon: BarChart3
    },
    {
      step: "03",
      title: "Pilot Implementation",
      description: "Controlled rollout with selected product lines to validate performance and refine approach.",
      icon: Clock
    },
    {
      step: "04",
      title: "Full Deployment",
      description: "Complete implementation with ongoing monitoring, optimization, and continuous improvement.",
      icon: CheckCircle
    }
  ];

  const caseStudy = {
    company: "Major QSR Chain",
    challenge: "Replace plastic containers across 500+ outlets while maintaining food safety and cost targets",
    solution: "Complete Compliance + ESG service package with custom thermoformed containers",
    results: [
      "100% CPCB compliance achieved in 90 days",
      "25% reduction in packaging costs",
      "Eliminated 2.3M plastic containers annually",
      "Improved ESG rating from B to A-"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Sustainability Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Beyond packaging – comprehensive services that ensure compliance, 
              drive ESG goals, and secure your sustainable supply chain with measurable results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#process"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <solution.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">{solution.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Service Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ArrowRight className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <img
                      src={index === 0 
                        ? "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600"
                        : index === 1 
                        ? "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600"
                        : "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600"
                      }
                      alt={solution.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section id="process" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Engage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured approach to ensure successful implementation and 
              measurable results from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-center">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {index < engagementProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-green-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 lg:py-24 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Story</h2>
            <p className="text-xl text-green-100">Real results from our integrated approach</p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client</h3>
                <p className="text-lg text-green-600 font-semibold mb-6">{caseStudy.company}</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm mb-6">{caseStudy.challenge}</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Measurable Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <p className="text-gray-700 italic">
                    "Pravaah's integrated approach eliminated our compliance headaches while 
                    actually reducing costs. The ESG reporting has been invaluable for our 
                    sustainability communications."
                  </p>
                  <p className="text-green-600 font-semibold mt-3">- Sustainability Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Approach?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific requirements and 
            see how our integrated solutions can drive your sustainability goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/case-studies"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;