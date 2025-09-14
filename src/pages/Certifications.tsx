import React from 'react';
import { Award, Shield, CheckCircle, FileText, Microscope, Globe, Download } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "CPCB Certification",
      authority: "Central Pollution Control Board, India",
      description: "Official certification for compostable plastic products meeting Indian environmental standards.",
      scope: "All product categories",
      validUntil: "2025-12-31",
      status: "Active",
      documents: ["Certificate", "Test Reports", "Compliance Summary"]
    },
    {
      icon: Award,
      title: "BIS Standards",
      authority: "Bureau of Indian Standards",
      description: "Quality and safety standards compliance for packaging materials and food contact applications.",
      scope: "Food-grade products",
      validUntil: "2025-06-30",
      status: "Active",
      documents: ["IS 17088 Certificate", "Quality Manual"]
    },
    {
      icon: Globe,
      title: "ASTM D6400",
      authority: "American Society for Testing Materials",
      description: "International standard for compostable plastics recognized globally.",
      scope: "Export products",
      validUntil: "2025-08-15",
      status: "Active",
      documents: ["ASTM Certificate", "Lab Test Results"]
    },
    {
      icon: Microscope,
      title: "ISO 17088",
      authority: "International Organization for Standardization",
      description: "Specifications for compostable and biodegradable plastic materials.",
      scope: "All materials",
      validUntil: "2025-10-20",
      status: "Active",
      documents: ["ISO Certificate", "Material Specifications"]
    }
  ];

  const testingStandards = [
    {
      standard: "Biodegradability",
      test: "ISO 17556 / ASTM D5338",
      requirement: "≥ 90% within 180 days",
      result: "94% in 165 days"
    },
    {
      standard: "Disintegration",
      test: "ISO 20200 / ASTM D6868",
      requirement: "≤ 10% residue > 2mm",
      result: "3.2% residue"
    },
    {
      standard: "Ecotoxicity",
      test: "ISO 11269-2",
      requirement: "≤ 10% growth inhibition",
      result: "4.1% inhibition"
    },
    {
      standard: "Heavy Metals",
      test: "EN 13432",
      requirement: "Below regulatory limits",
      result: "Compliant"
    }
  ];

  const rdCapabilities = [
    {
      title: "PLA Blends",
      description: "Polylactic acid formulations optimized for different applications",
      applications: ["Food packaging", "Films", "Rigid containers"]
    },
    {
      title: "PBAT Technology",
      description: "Polybutylene adipate terephthalate for enhanced flexibility",
      applications: ["Flexible films", "Bags", "Agricultural applications"]
    },
    {
      title: "Starch Composites",
      description: "Natural starch-based materials for cost-effective solutions",
      applications: ["Disposable items", "Protective packaging", "Molded products"]
    },
    {
      title: "Additive Systems",
      description: "Proprietary additive packages for performance enhancement",
      applications: ["Barrier properties", "Processing aids", "Stabilizers"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-600 text-white p-4 rounded-full">
                <Award className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certifications & R&D Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our commitment to quality and innovation is backed by comprehensive certifications, 
              rigorous testing standards, and cutting-edge research in biodegradable materials.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download All Certificates</span>
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All products are certified by leading authorities to ensure compliance, 
              safety, and environmental standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <cert.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-green-600 font-medium mb-3">{cert.authority}</p>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Scope:</span>
                        <p className="text-gray-600">{cert.scope}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Valid Until:</span>
                        <p className="text-gray-600">{cert.validUntil}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-medium text-gray-900 text-sm mb-2 block">Available Documents:</span>
                      <div className="flex flex-wrap gap-2">
                        {cert.documents.map((doc, idx) => (
                          <button
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-700 transition-colors"
                          >
                            {doc}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Standards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Testing & Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rigorous testing protocols ensure our products meet the highest 
              standards for biodegradability and environmental safety.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Compostability Test Results</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Standard</th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Test Method</th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Requirement</th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Our Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {testingStandards.map((test, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-8 py-4">
                        <div className="font-medium text-gray-900">{test.standard}</div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="text-gray-600">{test.test}</div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="text-gray-600">{test.requirement}</div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-green-600">{test.result}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Research & Development
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced material science capabilities driving innovation in 
              biodegradable polymer blends and compostable formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rdCapabilities.map((capability, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Microscope className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                    <p className="text-gray-600 mb-4">{capability.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {capability.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Support */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Compliance Support?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Our compliance team provides comprehensive support for regulatory 
              requirements, certification processes, and documentation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Download Compliance Guide</span>
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Compliance Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;