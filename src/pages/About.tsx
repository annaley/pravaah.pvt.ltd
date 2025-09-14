import React from 'react';
import { Users, Target, Eye, MapPin, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "15+ years in sustainable packaging, former sustainability director at Fortune 500 company."
    },
    {
      name: "Dr. Priya Sharma",
      position: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "PhD in Materials Science, expert in biodegradable polymers and compostable materials."
    },
    {
      name: "Amit Gupta",
      position: "VP Operations",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Supply chain veteran with 12+ years optimizing manufacturing and distribution."
    },
    {
      name: "Meera Patel",
      position: "Head of Compliance",
      image: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Regulatory expert specializing in CPCB standards and environmental compliance."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", desc: "Started with vision for sustainable packaging" },
    { year: "2021", title: "CPCB Certification", desc: "Achieved first product certifications" },
    { year: "2022", title: "Manufacturing Scale", desc: "Established production facility" },
    { year: "2023", title: "B2B Expansion", desc: "Launched compliance services" },
    { year: "2024", title: "Pravaah Home", desc: "Consumer product line launch" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To accelerate India's transition to sustainable packaging through innovative, compliant solutions that serve both business needs and environmental goals."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be India's most trusted partner for compostable packaging, driving a circular economy where business success and environmental stewardship go hand in hand."
    },
    {
      icon: Award,
      title: "Values",
      description: "Compliance-first approach, scientific rigor, transparent partnerships, and unwavering commitment to environmental impact measurement and improvement."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Building India's Sustainable Future
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by sustainability experts, Pravaah combines deep regulatory knowledge 
              with innovative materials science to deliver packaging solutions that meet the 
              highest compliance standards while driving measurable environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders combining deep industry expertise with 
              passion for environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 text-center font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in building India's most trusted compostable packaging company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-green-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Operations */}
      <section className="py-16 lg:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Manufacturing Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art manufacturing facility combines advanced production 
                capabilities with rigorous quality control to ensure consistent, 
                CPCB-certified compostable products.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50,000</div>
                  <div className="text-gray-600">sq ft facility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-gray-600">Production capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">ISO</div>
                  <div className="text-gray-600">Quality certified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Quality testing</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Manufacturing facility"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">India</div>
                    <div className="text-sm text-gray-600">Manufacturing Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Environmental Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable results in helping companies achieve sustainability goals 
              and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2.5M</div>
              <div className="text-gray-600">Plastic units replaced</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Compliance rate</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Corporate partners</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600">States served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;