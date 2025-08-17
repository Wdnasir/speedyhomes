import React, { useState } from 'react';
import { Users, Upload, CheckCircle, FileText, DollarSign } from 'lucide-react';

const JVFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    capitalAvailable: '',
    preferredMarkets: '',
    propertyTypes: [],
    partnership: '',
    description: ''
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      propertyTypes: formData.propertyTypes.includes(value)
        ? formData.propertyTypes.filter(type => type !== value)
        : [...formData.propertyTypes, value]
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('JV Form submission:', formData, files);
    alert('JV partnership application submitted successfully! We will review and get back to you within 2 business days.');
  };

  const propertyTypeOptions = [
    'Single Family Homes',
    'Multi-Family Properties',
    'Commercial Properties',
    'Fix & Flip Projects',
    'Buy & Hold Rentals',
    'Land Development'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Users className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Joint Venture Partnership
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Partner with Speedy Homes for exclusive deal flow and co-investment opportunities. 
            Join our network of trusted investors and scale your portfolio faster.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Exclusive Deals</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Get first access to our best off-market properties</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Trusted Network</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Connect with vetted investors and industry professionals</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Streamlined Process</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Fast closings with our proven acquisition process</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Partnership Application
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Investment Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Real Estate Investment Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (3-5 years)</option>
                  <option value="advanced">Advanced (6-10 years)</option>
                  <option value="expert">Expert (10+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Available Capital Range *
                </label>
                <select
                  name="capitalAvailable"
                  value={formData.capitalAvailable}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select capital range</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k-500k">$250K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Markets
                </label>
                <input
                  type="text"
                  name="preferredMarkets"
                  value={formData.preferredMarkets}
                  onChange={handleInputChange}
                  placeholder="e.g., Atlanta, Birmingham, Nashville"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Property Types */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Property Types of Interest *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {propertyTypeOptions.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.propertyTypes.includes(type)}
                        onChange={() => handleCheckboxChange(type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Partnership Preference */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Partnership Structure *
                </label>
                <select
                  name="partnership"
                  value={formData.partnership}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select partnership structure</option>
                  <option value="equity-partner">Equity Partner (50/50 split)</option>
                  <option value="silent-investor">Silent Investor (Fixed returns)</option>
                  <option value="lender">Private Lender (Interest-based)</option>
                  <option value="flexible">Flexible (Deal dependent)</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tell Us About Yourself
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your investment goals, experience with partnerships, and what you're looking for in a JV opportunity..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Supporting Documents (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Upload financial statements, portfolio summaries, or references
                  </p>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
                  >
                    Choose Files
                  </label>
                </div>
                {files.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Uploaded files:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors flex items-center justify-center"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Submit Partnership Application
              </button>
            </form>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What Happens Next?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Application Review</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Our team reviews your application within 2 business days
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Discovery Call</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Schedule a call to discuss partnership opportunities
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Deal Flow Access</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Get exclusive access to our vetted investment opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JVFormPage;