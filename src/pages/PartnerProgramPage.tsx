import React from 'react';
import { Link } from 'react-router-dom';
import { Users, DollarSign, TrendingUp, Award, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const PartnerProgramPage = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Competitive Commissions",
      description: "Earn up to 3% commission on successful referrals with tiered rewards based on volume"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Dedicated Support",
      description: "Get assigned a dedicated partner manager to help maximize your success"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Marketing Resources",
      description: "Access professional marketing materials, co-branded content, and lead generation tools"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Performance Bonuses",
      description: "Unlock additional bonuses and rewards as you reach monthly and quarterly targets"
    }
  ];

  const partnerTypes = [
    {
      title: "Real Estate Agents",
      description: "Partner with us to provide additional value to your clients looking to sell investment properties",
      perks: ["3% referral commission", "Co-marketing opportunities", "Priority client service"],
      color: "blue"
    },
    {
      title: "Wholesalers",
      description: "Expand your buyer network and increase deal flow with our extensive investor database",
      perks: ["2-3% finder's fees", "Bulk deal bonuses", "Fast closing support"],
      color: "green"
    },
    {
      title: "Property Managers",
      description: "Refer property owners looking to sell and earn commissions on successful transactions",
      perks: ["2% referral fees", "Tenant placement bonuses", "Property management referrals"],
      color: "purple"
    },
    {
      title: "Industry Professionals",
      description: "Contractors, lenders, and other professionals can refer clients and earn rewards",
      perks: ["1-2% referral fees", "Cross-referral opportunities", "Professional network access"],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20",
      green: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20",
      purple: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20",
      yellow: "border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Join Our Partner Program & 
                <span className="text-yellow-400"> Earn More</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Partner with Speedy Homes and unlock additional revenue streams. Refer clients, 
                earn commissions, and grow your business with our comprehensive partner program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
                >
                  Join Partner Program
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Call
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Business partnership handshake"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Earn Up To</p>
                    <p className="text-green-600 font-bold text-xl">3% Commission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Partner Program Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've designed our partner program to ensure mutual success. Here's what you get when you join.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Partner Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We work with various types of partners across the real estate industry. 
              Find the category that best describes your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg border-2 ${getColorClasses(partner.color)} hover:shadow-xl transition-shadow`}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {partner.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {partner.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Partner Perks:</h4>
                  {partner.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Getting started is simple. Follow these steps to begin earning commissions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Apply</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Submit your application and get approved for our partner program
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Refer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Refer qualified clients who are looking to sell investment properties
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Track</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your referrals and commissions through your partner dashboard
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Earn</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receive your commission payments within 30 days of deal closing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$2.1M</div>
              <div className="text-gray-600 dark:text-gray-300">Commissions Paid</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Partner Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">30 Days</div>
              <div className="text-gray-600 dark:text-gray-300">Average Payout</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our partner program today and start generating additional revenue streams for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Request Info Packet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerProgramPage;