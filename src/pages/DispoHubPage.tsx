import React, { useState } from 'react';
import { Search, Filter, MapPin, Home, DollarSign, Calendar, Heart, Eye, Star } from 'lucide-react';

const DispoHubPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    propertyType: '',
    priceRange: '',
    location: '',
    bedrooms: ''
  });

  // Mock properties data
  const properties = [
    {
      id: 1,
      address: '123 Main Street',
      city: 'Atlanta',
      state: 'GA',
      zip: '30309',
      type: 'Single Family',
      price: 275000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1850,
      yearBuilt: 1995,
      condition: 'Good',
      rehab: 25000,
      arv: 350000,
      images: ['https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'],
      description: 'Great investment opportunity in popular Midtown area. Property needs minor updates but has strong rental potential.',
      daysOnMarket: 5,
      roi: '18%'
    },
    {
      id: 2,
      address: '456 Oak Avenue',
      city: 'Birmingham',
      state: 'AL',
      zip: '35203',
      type: 'Multi-Family',
      price: 420000,
      bedrooms: 6,
      bathrooms: 4,
      sqft: 3200,
      yearBuilt: 1988,
      condition: 'Fair',
      rehab: 40000,
      arv: 550000,
      images: ['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'],
      description: 'Duplex with excellent cash flow potential. Both units currently rented with long-term tenants.',
      daysOnMarket: 12,
      roi: '22%'
    },
    {
      id: 3,
      address: '789 Pine Road',
      city: 'Nashville',
      state: 'TN',
      zip: '37205',
      type: 'Condo',
      price: 180000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      yearBuilt: 2005,
      condition: 'Excellent',
      rehab: 10000,
      arv: 220000,
      images: ['https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'],
      description: 'Modern condo in desirable Music Row area. Move-in ready with recent upgrades.',
      daysOnMarket: 3,
      roi: '15%'
    },
    {
      id: 4,
      address: '321 Elm Street',
      city: 'Atlanta',
      state: 'GA',
      zip: '30312',
      type: 'Single Family',
      price: 195000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2100,
      yearBuilt: 1985,
      condition: 'Needs Work',
      rehab: 35000,
      arv: 295000,
      images: ['https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'],
      description: 'Fixer-upper with great bones in up-and-coming neighborhood. Perfect for experienced investors.',
      daysOnMarket: 8,
      roi: '25%'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = !filters.propertyType || property.type === filters.propertyType;
    const matchesLocation = !filters.location || property.city === filters.location;
    
    let matchesPrice = true;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(p => parseInt(p));
      matchesPrice = property.price >= min && (!max || property.price <= max);
    }
    
    const matchesBedrooms = !filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms);
    
    return matchesSearch && matchesType && matchesLocation && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dispo Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Browse our curated selection of investment properties. Find your next deal with detailed analytics, 
            high-quality photos, and transparent pricing.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by address, city, or property type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Property Type */}
            <div>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">All Types</option>
                <option value="Single Family">Single Family</option>
                <option value="Multi-Family">Multi-Family</option>
                <option value="Condo">Condo</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">All Cities</option>
                <option value="Atlanta">Atlanta, GA</option>
                <option value="Birmingham">Birmingham, AL</option>
                <option value="Nashville">Nashville, TN</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Any Price</option>
                <option value="0-200000">Under $200K</option>
                <option value="200000-400000">$200K - $400K</option>
                <option value="400000-600000">$400K - $600K</option>
                <option value="600000-999999">$600K+</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Any Beds</option>
                <option value="1">1+ Bed</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
                <option value="4">4+ Beds</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredProperties.length} properties
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>ROI: Highest</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              {/* Property Image */}
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.address}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {property.roi} ROI
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    ${property.price.toLocaleString()}
                  </h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">New</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.address}, {property.city}, {property.state}</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms} bed • {property.bathrooms} bath</span>
                  </div>
                  <span>•</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Investment Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Rehab Est.</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      ${property.rehab.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">ARV</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      ${property.arv.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">On Market</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {property.daysOnMarket} days
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Properties
          </button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 dark:bg-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Don't See What You're Looking For?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We get new properties daily. Let us know your specific criteria and we'll notify you 
            when matching properties become available.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-bold transition-colors">
            Set Up Property Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default DispoHubPage;