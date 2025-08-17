import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Home, Settings, Bell, FileText, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('properties');

  // Mock data - replace with real API calls
  const mockProperties = [
    {
      id: '1',
      address: '123 Main St, Atlanta, GA',
      type: 'Single Family',
      price: '$250,000',
      status: 'Under Review',
      submittedAt: '2024-01-15',
      progress: 25
    },
    {
      id: '2', 
      address: '456 Oak Ave, Birmingham, AL',
      type: 'Condo',
      price: '$180,000',
      status: 'In Progress',
      submittedAt: '2024-01-10',
      progress: 75
    },
    {
      id: '3',
      address: '789 Pine Rd, Nashville, TN',
      type: 'Multi-Family',
      price: '$350,000',
      status: 'Closed',
      submittedAt: '2024-01-05',
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'In Progress': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Closed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Rejected': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Closed': return <CheckCircle className="h-4 w-4" />;
      case 'Rejected': return <XCircle className="h-4 w-4" />;
      case 'In Progress': return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const stats = [
    { label: 'Total Submissions', value: '8', icon: <FileText className="h-6 w-6" /> },
    { label: 'Active Deals', value: '3', icon: <Clock className="h-6 w-6" /> },
    { label: 'Closed Deals', value: '5', icon: <CheckCircle className="h-6 w-6" /> },
    { label: 'Success Rate', value: '85%', icon: <Settings className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Professional Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, {user?.name}!
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Track your property submissions and deal progress
                </p>
                <div className="flex items-center mt-3 space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Active Member
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Member since {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm">
                Submit New Property
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12% this month</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 rounded-xl">
                  <div className="text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8">
              <button
                onClick={() => setActiveTab('properties')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'properties'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-t-lg px-4'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Home className="h-4 w-4 inline mr-2" />
                My Properties
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'notifications'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-t-lg px-4'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Bell className="h-4 w-4 inline mr-2" />
                Updates
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-t-lg px-4'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Settings className="h-4 w-4 inline mr-2" />
                Settings
              </button>
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'properties' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Your Properties
                  </h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm">
                    Submit New Property
                  </button>
                </div>

                <div className="space-y-4">
                  {mockProperties.map((property) => (
                    <div key={property.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-200 dark:hover:border-blue-700">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-3 rounded-xl">
                            <Home className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {property.address}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {property.type} • Submitted {property.submittedAt}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-xl font-bold text-gray-900 dark:text-white">
                            {property.price}
                          </span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                            {getStatusIcon(property.status)}
                            <span className="ml-1">{property.status}</span>
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>Deal Progress</span>
                          <span>{property.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${property.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <span>ID: {property.id}</span>
                        </div>
                        <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Recent Updates
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Deal Closed Successfully</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Your property at 789 Pine Rd has been successfully closed. Congratulations!
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                    <Clock className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Buyer Interest Received</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        A qualified buyer has shown interest in your property at 456 Oak Ave.
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Account Settings
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Profile Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          value={user?.name || ''}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={user?.email || ''}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                      Notification Preferences
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-5 w-5" />
                        <span className="ml-3 text-gray-700 dark:text-gray-300">Email notifications for deal updates</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-5 w-5" />
                        <span className="ml-3 text-gray-700 dark:text-gray-300">SMS notifications for urgent updates</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-5 w-5" />
                        <span className="ml-3 text-gray-700 dark:text-gray-300">Marketing emails</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-sm">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;