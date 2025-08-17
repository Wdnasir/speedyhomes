import React, { useState } from 'react';
import { Clock, Bell, CheckCircle } from 'lucide-react';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email subscription:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 dark:from-blue-800 dark:via-purple-900 dark:to-gray-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're working hard to bring you something amazing. This page will be available soon 
            with exciting new features and tools to help you succeed in real estate investing.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Advanced Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Detailed market analysis and investment projections
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Deal Automation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Streamlined workflows for faster deal processing
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Enhanced Reporting</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Comprehensive reports with actionable insights
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Mobile App</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Manage your investments on the go
                </p>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Get Notified When We Launch
              </h3>
            </div>

            {isSubscribed ? (
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Thank you! We'll notify you when this feature is ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

          {/* Back Link */}
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;