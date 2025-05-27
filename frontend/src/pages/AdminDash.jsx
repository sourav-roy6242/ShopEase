
import { useState } from 'react';
import { 
  FaShieldAlt, FaHome, FaChartLine, FaShoppingCart, 
  FaUsers, FaBox, FaCog, FaBell, FaQuestionCircle,
  FaSearch, FaDollarSign, FaChartBar, FaShoppingBag
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg z-10 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-5 flex items-center border-b border-gray-100">
          <FaShieldAlt className="text-indigo-600 text-2xl" />
          {sidebarOpen && <h3 className="text-indigo-600 font-semibold text-lg ml-3">Admin Panel</h3>}
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
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'analytics' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaChartLine className="text-lg" />
                {sidebarOpen && <span className="ml-3">Analytics</span>}
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
                onClick={() => setActiveTab('users')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'users' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaUsers className="text-lg" />
                {sidebarOpen && <span className="ml-3">Users</span>}
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
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'settings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaCog className="text-lg" />
                {sidebarOpen && <span className="ml-3">Settings</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaBell className="text-lg" />
                {sidebarOpen && <span className="ml-3">Notifications</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('support')}
                className={`flex items-center w-full p-3 rounded-lg mb-1 ${activeTab === 'support' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FaQuestionCircle className="text-lg" />
                {sidebarOpen && <span className="ml-3">Support</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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
              {sidebarOpen && (
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-700">Jane Doe</h4>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Total Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">$12,345</h3>
                </div>
                <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600">
                  <FaDollarSign className="text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Total Users</p>
                  <h3 className="text-2xl font-bold mt-1">1,234</h3>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 text-blue-500">
                  <FaUsers className="text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Total Orders</p>
                  <h3 className="text-2xl font-bold mt-1">567</h3>
                </div>
                <div className="p-3 rounded-lg bg-amber-50 text-amber-500">
                  <FaShoppingBag className="text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">Conversion Rate</p>
                  <h3 className="text-2xl font-bold mt-1">89%</h3>
                </div>
                <div className="p-3 rounded-lg bg-green-50 text-green-500">
                  <FaChartBar className="text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Orders</h3>
                <a href="#" className="text-indigo-600 text-sm hover:underline">View All</a>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <a href="#" className="text-indigo-600 text-sm hover:underline">View All</a>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`p-2 rounded-full mr-4 ${activity.type === 'order' ? 'bg-indigo-100 text-indigo-600' : activity.type === 'user' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
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
        </div>
      </div>
    </div>
  );
};

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

export default AdminDashboard;

