import { useState, useEffect } from 'react';
import { 
  FaShieldAlt, FaHome, FaChartLine, FaShoppingCart, 
  FaUsers, FaBox, FaCog, FaBell, FaQuestionCircle,
  FaSearch, FaDollarSign, FaChartBar, FaShoppingBag,
  FaVideo, FaTimes, FaBars, FaUserCircle, FaStore
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [streamActive, setStreamActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleStream = () => {
    setStreamActive(!streamActive);
  };

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'products':
        return <ProductList />;
      case 'orders':
        return <OrderList />;
      case 'live':
        return <LiveStream active={streamActive} toggle={toggleStream} />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile top bar */}
      {isMobile && (
        <div className="bg-white shadow-sm p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-20">
          <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
            <FaBars className="h-6 w-6 text-gray-500" />
          </button>
          <h3 className="text-indigo-600 font-semibold text-lg">Admin Panel</h3>
          <div className="w-10 h-10"></div> {/* Spacer for alignment */}
        </div>
      )}

      {/* Sidebar */}
      <div 
        className={`bg-white shadow-lg z-10 transition-all duration-300 fixed lg:relative inset-y-0 left-0 h-full
          ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0 lg:w-20'}`}
      >
        <div className="p-5 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center">
            <FaShieldAlt className="text-indigo-600 text-2xl" />
            {sidebarOpen && <h3 className="text-indigo-600 font-semibold text-lg ml-3">Admin Panel</h3>}
          </div>
          {sidebarOpen && isMobile && (
            <button onClick={toggleSidebar} className="lg:hidden">
              <FaTimes className="text-gray-500" />
            </button>
          )}
        </div>
        
        <div className="p-4">
          <h4 className={`text-xs uppercase text-gray-400 tracking-wider mb-3 ${!sidebarOpen && 'hidden'}`}>Main</h4>
          <ul>
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaHome className="text-lg" />
                {sidebarOpen && <span className="ml-3">Dashboard</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('live')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'live' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaVideo className="text-lg" />
                {sidebarOpen && <span className="ml-3">Live Stream</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'orders' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaShoppingCart className="text-lg" />
                {sidebarOpen && <span className="ml-3">Orders</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('products')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'products' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaBox className="text-lg" />
                {sidebarOpen && <span className="ml-3">Products</span>}
              </button>
            </li>
          </ul>

          {sidebarOpen && <h4 className="text-xs uppercase text-gray-400 tracking-wider mt-6 mb-3">Management</h4>}
          <ul>
            <li>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'analytics' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaChartLine className="text-lg" />
                {sidebarOpen && <span className="ml-3">Analytics</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('users')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'users' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaUsers className="text-lg" />
                {sidebarOpen && <span className="ml-3">Users</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 overflow-auto ${isMobile ? 'mt-16' : ''}`}>
        {/* Top Navigation */}
        {!isMobile && (
          <div className="bg-white shadow-sm p-4 flex justify-between items-center">
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <FaBars className="h-6 w-6 text-gray-500" />
            </button>

            <div className="relative w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                placeholder="Search..."
              />
            </div>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <FaBell className="text-gray-600 text-xl cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </div>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="User" 
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-700">Jane Doe</h4>
                  <p className="text-xs text-gray-500">Admin | New York, US</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="p-4 md:p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Dashboard Home Component
const DashboardHome = () => (
  <>
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
      <div className="bg-white rounded-lg shadow p-4 md:p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h3 className="text-xl md:text-2xl font-bold mt-1">$12,345</h3>
            <p className="text-xs text-green-500 mt-1">↑ 12% from last month</p>
          </div>
          <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600">
            <FaDollarSign className="text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 md:p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <h3 className="text-xl md:text-2xl font-bold mt-1">1,234</h3>
            <p className="text-xs text-green-500 mt-1">↑ 8% from last month</p>
          </div>
          <div className="p-3 rounded-lg bg-blue-50 text-blue-500">
            <FaUsers className="text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 md:p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h3 className="text-xl md:text-2xl font-bold mt-1">567</h3>
            <p className="text-xs text-red-500 mt-1">↓ 3% from last month</p>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 text-amber-500">
            <FaShoppingBag className="text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 md:p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-gray-500 text-sm">Conversion Rate</p>
            <h3 className="text-xl md:text-2xl font-bold mt-1">89%</h3>
            <p className="text-xs text-green-500 mt-1">↑ 5% from last month</p>
          </div>
          <div className="p-3 rounded-lg bg-green-50 text-green-500">
            <FaChartBar className="text-xl" />
          </div>
        </div>
      </div>
    </div>

    {/* Main Content Area */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6 lg:col-span-2">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <button 
            onClick={() => setActiveTab('orders')}
            className="text-indigo-600 text-sm hover:underline"
          >
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Order ID</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Customer</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Date</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Amount</th>
                <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.slice(0, 4).map((order, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-sm font-medium text-gray-700">#{order.id}</td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <img src={order.avatar} alt={order.name} className="h-8 w-8 rounded-full mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">{order.name}</p>
                        <p className="text-xs text-gray-500">{order.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-500">{order.date}</td>
                  <td className="py-3 text-sm font-medium text-gray-700">${order.amount}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : order.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <button className="text-indigo-600 text-sm hover:underline">View All</button>
        </div>

        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start">
              <div className={`p-2 rounded-full mr-3 ${activity.type === 'order' ? 'bg-indigo-100 text-indigo-600' : activity.type === 'user' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                {activity.type === 'order' ? <FaShoppingBag /> : activity.type === 'user' ? <FaUsers /> : <FaBell />}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-700">{activity.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

// Product List Component
const ProductList = () => (
  <div className="bg-white rounded-lg shadow p-4 md:p-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <h2 className="text-xl font-bold mb-4 md:mb-0">Product Inventory</h2>
      <div className="flex space-x-3">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
          Add Product
        </button>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            className="block pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="Search products..."
          />
        </div>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Product</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Category</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Stock</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Price</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Status</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="h-10 w-10 rounded object-cover mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{product.name}</p>
                    <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 text-sm text-gray-500">{product.category}</td>
              <td className="py-4">
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">{product.stock}</span>
                  {product.stock < 10 && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Low</span>
                  )}
                </div>
              </td>
              <td className="py-4 text-sm font-medium text-gray-700">${product.price}</td>
              <td className="py-4">
                <span className={`px-2 py-1 text-xs rounded-full ${product.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {product.status}
                </span>
              </td>
              <td className="py-4">
                <div className="flex space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 flex justify-between items-center">
      <p className="text-sm text-gray-500">Showing 1 to 8 of 32 products</p>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Previous</button>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">2</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">3</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Next</button>
      </div>
    </div>
  </div>
);

// Order List Component
const OrderList = () => (
  <div className="bg-white rounded-lg shadow p-4 md:p-6">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <h2 className="text-xl font-bold mb-4 md:mb-0">Order Management</h2>
      <div className="flex space-x-3">
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option>All Orders</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input 
            type="text" 
            className="block pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="Search orders..."
          />
        </div>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Order ID</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Customer</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Date</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Amount</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Status</th>
            <th className="text-left text-xs text-gray-500 uppercase tracking-wider py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 text-sm font-medium text-gray-700">#{order.id}</td>
              <td className="py-4">
                <div className="flex items-center">
                  <img src={order.avatar} alt={order.name} className="h-8 w-8 rounded-full mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">{order.name}</p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 text-sm text-gray-500">{order.date}</td>
              <td className="py-4 text-sm font-medium text-gray-700">${order.amount}</td>
              <td className="py-4">
                <span className={`px-2 py-1 text-xs rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : order.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'}`}>
                  {order.status}
                </span>
              </td>
              <td className="py-4">
                <button className="text-indigo-600 hover:text-indigo-900 text-sm">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 flex justify-between items-center">
      <p className="text-sm text-gray-500">Showing 1 to 5 of 24 orders</p>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Previous</button>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">2</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">3</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm">Next</button>
      </div>
    </div>
  </div>
);

// Live Stream Component
const LiveStream = ({ active, toggle }) => (
  <div className="bg-white rounded-lg shadow p-4 md:p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Live Streaming</h2>
      <button 
        onClick={toggle}
        className={`px-4 py-2 rounded-lg text-sm font-medium ${
          active 
            ? 'bg-red-600 text-white hover:bg-red-700' 
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {active ? 'End Stream' : 'Go Live'}
      </button>
    </div>

    {active ? (
      <div className="space-y-6">
        <div className="relative bg-black rounded-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <div className="bg-gray-900 w-full h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                    <FaVideo className="text-white text-2xl" />
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold">Live Streaming Active</h3>
                <p className="text-gray-400 mt-2">Streaming to 128 viewers</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            LIVE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3">Stream Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Title</p>
                <p className="font-medium">Product Launch Event</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Scheduled Time</p>
                <p className="font-medium">May 28, 2023 | 14:00 - 16:00 EST</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Description</p>
                <p className="font-medium">Introducing our new product line with special discounts</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3">Live Comments</h3>
            <div className="h-48 overflow-y-auto space-y-3">
              {liveComments.map((comment, index) => (
                <div key={index} className="flex">
                  <div className="mr-3">
                    <FaUserCircle className="text-gray-400 text-2xl" />
                  </div>
                  <div className="bg-white p-3 rounded-lg flex-1">
                    <p className="font-medium text-sm">{comment.name}</p>
                    <p className="text-sm mt-1">{comment.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{comment.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 rounded-r-lg">Send</button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <FaVideo className="text-gray-400 text-3xl" />
        </div>
        <h3 className="text-xl font-bold mt-6">Start a Live Stream</h3>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Go live to interact with your audience in real-time. Share updates, showcase products, or host Q&A sessions.
        </p>
        <button 
          onClick={toggle}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Start Streaming
        </button>
      </div>
    )}
  </div>
);

// Sample data
const recentOrders = [
  {
    id: 'ORD-123',
    name: 'John Smith',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'May 15, 2023',
    amount: '125.00',
    status: 'Completed'
  },
  {
    id: 'ORD-124',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'May 14, 2023',
    amount: '89.50',
    status: 'Pending'
  },
  {
    id: 'ORD-125',
    name: 'Michael Brown',
    email: 'michael@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    date: 'May 14, 2023',
    amount: '245.75',
    status: 'Completed'
  },
  {
    id: 'ORD-126',
    name: 'Emily Davis',
    email: 'emily@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    date: 'May 13, 2023',
    amount: '67.30',
    status: 'Cancelled'
  },
  {
    id: 'ORD-127',
    name: 'David Wilson',
    email: 'david@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    date: 'May 12, 2023',
    amount: '189.99',
    status: 'Completed'
  }
];

const recentActivities = [
  {
    type: 'order',
    title: 'New order received',
    description: 'Order #ORD-128 from John Doe',
    time: '2 hours ago'
  },
  {
    type: 'user',
    title: 'New user registered',
    description: 'Sarah Johnson joined the platform',
    time: '5 hours ago'
  },
  {
    type: 'notification',
    title: 'System update',
    description: 'New version 2.3.0 is available',
    time: '1 day ago'
  },
  {
    type: 'order',
    title: 'Order completed',
    description: 'Order #ORD-125 has been delivered',
    time: '2 days ago'
  },
];

const products = [
  {
    id: 'PROD-001',
    sku: 'TS-001',
    name: 'Wireless Headphones',
    category: 'Electronics',
    stock: 15,
    price: 129.99,
    status: 'Published',
    image: 'https://via.placeholder.com/40'
  },
  {
    id: 'PROD-002',
    sku: 'APP-045',
    name: 'Smart Watch',
    category: 'Wearables',
    stock: 8,
    price: 199.99,
    status: 'Published',
    image: 'https://via.placeholder.com/40'
  },
  {
    id: 'PROD-003',
    sku: 'CL-112',
    name: 'Cotton T-Shirt',
    category: 'Apparel',
    stock: 42,
    price: 24.99,
    status: 'Published',
    image: 'https://via.placeholder.com/40'
  },
  {
    id: 'PROD-004',
    sku: 'KIT-007',
    name: 'Coffee Maker',
    category: 'Home & Kitchen',
    stock: 5,
    price: 89.99,
    status: 'Draft',
    image: 'https://via.placeholder.com/40'
  },
  {
    id: 'PROD-005',
    sku: 'BK-203',
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    stock: 22,
    price: 59.99,
    status: 'Published',
    image: 'https://via.placeholder.com/40'
  },
  {
    id: 'PROD-006',
    sku: 'FUR-033',
    name: 'Office Chair',
    category: 'Furniture',
    stock: 3,
    price: 149.99,
    status: 'Published',
    image: 'https://via.placeholder.com/40'
  },
  {
    id: 'PROD-007',
    sku: 'ACC-101',
    name: 'Phone Charger',
    category: 'Accessories',
    stock: 67,
    price: 19.99,
    status: 'Published',
    image: 'https://via.placeholder.com/40'
  },
  {
    id: 'PROD-008',
    sku: 'BAG-022',
    name: 'Laptop Backpack',
    category: 'Bags',
    stock: 11,
    price: 49.99,
    status: 'Published',
    image: 'https://via.placeholder.com/40'
  }
];

const liveComments = [
  {
    name: 'Alex Johnson',
    text: 'Excited for the new products! When will they be available?',
    time: '2 min ago'
  },
  {
    name: 'Sarah Miller',
    text: 'The design looks amazing! Can we get it in different colors?',
    time: '4 min ago'
  },
  {
    name: 'Mike Peterson',
    text: 'Will there be an early bird discount?',
    time: '5 min ago'
  },
  {
    name: 'Emma Davis',
    text: 'How does this compare to the previous model?',
    time: '7 min ago'
  },
  {
    name: 'David Wilson',
    text: 'Just placed my pre-order!',
    time: '9 min ago'
  }
];

export default AdminDashboard;