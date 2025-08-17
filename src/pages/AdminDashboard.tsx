import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BarChart, Users, Home, DollarSign, TrendingUp, Mail, Phone, MapPin, CheckCircle, XCircle, Clock, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with real API calls
  const mockSubmissions = [
    {
      id: '1',
      userEmail: 'john@example.com',
      address: '123 Main St, Atlanta, GA',
      type: 'Single Family',
      price: '$250,000',
      status: 'New',
      submittedAt: '2024-01-15',
      rehab: '$25,000',
      arv: '$350,000'
    },
    {
      id: '2',
      userEmail: 'sarah@example.com',
      address: '456 Oak Ave, Birmingham, AL',
      type: 'Condo',
      price: '$180,000',
      status: 'Under Review',
      submittedAt: '2024-01-14',
      rehab: '$15,000',
      arv: '$220,000'
    },
    {
      id: '3',
      userEmail: 'mike@example.com',
      address: '789 Pine Rd, Nashville, TN',
      type: 'Multi-Family',
      price: '$350,000',
      status: 'In Progress',
      submittedAt: '2024-01-13',
      rehab: '$40,000',
      arv: '$450,000'
    }
  ];

  const stats = [
    { label: 'Total Submissions', value: '127', change: '+12%', icon: <Home className="h-6 w-6" />, color: 'blue' },
    { label: 'Active Users', value: '89', change: '+8%', icon: <Users className="h-6 w-6" />, color: 'green' },
    { label: 'Total Volume', value: '$2.4M', change: '+15%', icon: <DollarSign className="h-6 w-6" />, color: 'purple' },
    { label: 'Conversion Rate', value: '68%', change: '+3%', icon: <TrendingUp className="h-6 w-6" />, color: 'yellow' }
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

  const updateStatus = (id: string, newStatus: string) => {
    console.log(`Updating submission ${id} to status: ${newStatus}`);
    // Implement API call to update status
  };

  const getStatColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Professional Admin Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Manage submissions, users, and track business metrics
                </p>
                <div className="flex items-center mt-3 space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    Administrator
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Last login: Today at 9:30 AM
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm">
                Export Report
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
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`p-4 rounded-xl ${getStatColor(stat.color)}`}>
                  {stat.icon}
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
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-t-lg px-4'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <BarChart className="h-4 w-4 inline mr-2" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('submissions')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'submissions'
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-t-lg px-4'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Home className="h-4 w-4 inline mr-2" />
                All Submissions
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'users'
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-t-lg px-4'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Users className="h-4 w-4 inline mr-2" />
                Users
              </button>
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Business Overview
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">Deal closed: $350,000 property in Nashville</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">New submission: $250,000 property in Atlanta</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-gray-600 dark:text-gray-300">3 new users registered today</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-left">
                        Export Monthly Report
                      </button>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-left">
                        Send Bulk Update Email
                      </button>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-left">
                        Review Pending Submissions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'submissions' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    All Property Submissions
                  </h2>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Export Data
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Bulk Actions
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {mockSubmissions.map((submission) => (
                    <div key={submission.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                            <Home className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {submission.address}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <span>{submission.type}</span>
                              <span>•</span>
                              <span className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {submission.userEmail}
                              </span>
                              <span>•</span>
                              <span>Submitted {submission.submittedAt}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Asking Price</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{submission.price}</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Est. Rehab</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{submission.rehab}</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">ARV</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{submission.arv}</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <p className="text-xs text-gray-500 dark:text-gray-400">Potential Profit</p>
                          <p className="font-semibold text-green-600 dark:text-green-400">
                            ${(parseInt(submission.arv.replace(/[^0-9]/g, '')) - 
                                parseInt(submission.price.replace(/[^0-9]/g, '')) - 
                                parseInt(submission.rehab.replace(/[^0-9]/g, ''))).toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateStatus(submission.id, 'Under Review')}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            Review
                          </button>
                          <button
                            onClick={() => updateStatus(submission.id, 'In Progress')}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateStatus(submission.id, 'Rejected')}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            Reject
                          </button>
                        </div>
                        <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  User Management
                </h2>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 text-center">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">User Management</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    User management features will be implemented here. This would include user profiles, 
                    activity logs, permission management, and user analytics.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;