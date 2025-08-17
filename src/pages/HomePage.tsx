import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, DollarSign, Clock, TrendingUp, Shield } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Submit Your Property",
      description: "Fill out our simple form with your property details and investment criteria."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Get Matched with Buyers",
      description: "We connect you with our network of verified cash buyers and investors."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
      title: "Close Fast",
      description: "Complete your deal quickly with our streamlined process and expert support."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Track Progress",
      description: "Monitor your deal status in real-time through your personal dashboard."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Real Estate Investor",
      content: "Speedy Homes helped me find buyers for 3 properties in just 2 weeks. Their process is incredibly efficient!",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mike Rodriguez",
      role: "Property Developer",
      content: "The best platform I've used for connecting with serious cash buyers. Highly recommend!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Jennifer Chen",
      role: "Wholesale Investor",
      content: "Their user dashboard makes it so easy to track all my deals in one place. Game changer!",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { label: "Properties Sold", value: "2,500+", icon: <Shield className="h-8 w-8 text-blue-500" /> },
    { label: "Happy Clients", value: "1,200+", icon: <Users className="h-8 w-8 text-green-500" /> },
    { label: "Avg. Close Time", value: "14 Days", icon: <Clock className="h-8 w-8 text-yellow-500" /> },
    { label: "Success Rate", value: "94%", icon: <TrendingUp className="h-8 w-8 text-purple-500" /> }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Find Cash Buyers for Your Properties 
                <span className="text-yellow-400"> Fast</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Connect with our network of verified cash buyers and close your deals in as little as 14 days. 
                Track every step through your personal dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/buy-box"
                  className="group bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern home"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Average Close Time</p>
                    <p className="text-green-600 font-bold">14 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
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
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes it easy to connect with cash buyers and close your deals quickly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Find Your Buyers?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful investors who trust Speedy Homes to close their deals fast.
          </p>
          <Link
            to="/signup"
            className="group inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            Create Your Account
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;