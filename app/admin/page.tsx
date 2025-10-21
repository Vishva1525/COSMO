'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  BarChart3, 
  Users, 
  Eye, 
  MessageSquare, 
  Plus, 
  Trash2, 
  Edit,
  Shield,
  ArrowLeft,
  Package,
  Image as ImageIcon,
  FileText
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface AnalyticsData {
  totalViews: number
  uniqueVisitors: number
  totalMessages: number
  callHistory: number
}

interface Product {
  id: string
  name: string
  description: string
  category: string
  subcategory: string
  image: string
  addedDate: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('analytics')
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    image: null as File | null
  })

  // Mock analytics data
  const [analytics] = useState<AnalyticsData>({
    totalViews: 1247,
    uniqueVisitors: 892,
    totalMessages: 34,
    callHistory: 18
  })

  // Mock data for different sections
  const [recentVisitors] = useState([
    { id: 1, ip: '192.168.1.1', location: 'Chennai, India', time: '2 minutes ago', page: '/collections/marble' },
    { id: 2, ip: '192.168.1.2', location: 'Mumbai, India', time: '5 minutes ago', page: '/collections/granite' },
    { id: 3, ip: '192.168.1.3', location: 'Bangalore, India', time: '8 minutes ago', page: '/' },
    { id: 4, ip: '192.168.1.4', location: 'Delhi, India', time: '12 minutes ago', page: '/collections/wood' }
  ])

  const [messages] = useState([
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@email.com', message: 'Interested in marble collection for my home', time: '1 hour ago', status: 'new' },
    { id: 2, name: 'Priya Sharma', email: 'priya@email.com', message: 'Need granite samples for office project', time: '2 hours ago', status: 'read' },
    { id: 3, name: 'Amit Patel', email: 'amit@email.com', message: 'Looking for wooden flooring options', time: '3 hours ago', status: 'new' }
  ])

  const [callHistory] = useState([
    { id: 1, name: 'Suresh Reddy', phone: '+91 98765 43210', duration: '15 min', time: '2 hours ago', status: 'completed' },
    { id: 2, name: 'Meera Singh', phone: '+91 87654 32109', duration: '8 min', time: '4 hours ago', status: 'completed' },
    { id: 3, name: 'Vikram Joshi', phone: '+91 76543 21098', duration: '12 min', time: '6 hours ago', status: 'completed' }
  ])

  const categories = {
    marble: ['beiges-and-cream', 'greys', 'whites', 'blacks', 'colors', 'onyx', 'travertino', 'indian-marble'],
    granite: ['indian-granites', 'imported-granites'],
    wood: ['engineered-wood', 'solid-wood', 'laminate'],
    doors: ['aluminum-doors', 'wooden-doors', 'glass-doors']
  }

  useEffect(() => {
    // Check if user is authenticated (in real app, this would be a proper auth check)
    const isAuth = sessionStorage.getItem('adminAuth')
    if (!isAuth) {
      router.push('/')
    }
  }, [router])

  // Handle authentication on page load
  useEffect(() => {
    const handleAuth = () => {
      const isAuth = sessionStorage.getItem('adminAuth')
      if (!isAuth) {
        router.push('/')
      }
    }
    
    // Check auth immediately
    handleAuth()
    
    // Also check when storage changes (for tab switching)
    window.addEventListener('storage', handleAuth)
    
    return () => {
      window.removeEventListener('storage', handleAuth)
    }
  }, [router])

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.description && newProduct.category && newProduct.subcategory) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        description: newProduct.description,
        category: newProduct.category,
        subcategory: newProduct.subcategory,
        image: newProduct.image ? URL.createObjectURL(newProduct.image) : '/assets/placeholder.jpg',
        addedDate: new Date().toLocaleDateString()
      }
      setProducts([...products, product])
      setNewProduct({ name: '', description: '', category: '', subcategory: '', image: null })
      setShowAddProduct(false)
    }
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct({ ...newProduct, image: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg-subtle"></div>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-brand-red transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Site</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-brand-red" />
                <h1 className="text-xl font-heading text-gray-800">Admin Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAddProduct(true)}
                className="flex items-center space-x-2 bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'visitors', label: 'Visitors', icon: Eye },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
              { id: 'calls', label: 'Call History', icon: Users },
              { id: 'products', label: 'Products', icon: Package }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-700 text-red-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-heading text-gray-800">Analytics Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Views</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.totalViews}</p>
                  </div>
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.uniqueVisitors}</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Messages</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.totalMessages}</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Call History</p>
                    <p className="text-2xl font-bold text-gray-900">{analytics.callHistory}</p>
                  </div>
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visitors Tab */}
        {activeTab === 'visitors' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-heading text-gray-800">Recent Visitors</h2>
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page Visited</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentVisitors.map((visitor) => (
                    <tr key={visitor.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{visitor.ip}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.page}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-heading text-gray-800">Customer Messages</h2>
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-medium text-gray-900">{message.name}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          message.status === 'new' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {message.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{message.email}</p>
                      <p className="text-gray-800">{message.message}</p>
                    </div>
                    <span className="text-sm text-gray-500">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call History Tab */}
        {activeTab === 'calls' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-heading text-gray-800">Call History</h2>
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {callHistory.map((call) => (
                    <tr key={call.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{call.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">{call.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-heading text-gray-800">Product Management</h2>
              <button
                onClick={() => setShowAddProduct(true)}
                className="flex items-center space-x-2 bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Product</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                      <span>{product.category} / {product.subcategory}</span>
                      <span>{product.addedDate}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-200 transition-colors">
                        <Edit className="w-4 h-4 inline mr-1" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="flex-1 bg-red-100 text-red-700 py-2 px-3 rounded text-sm hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 inline mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading text-gray-800">Add New Product</h3>
              <button
                onClick={() => setShowAddProduct(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-24"
                  placeholder="Enter product description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value, subcategory: '' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Category</option>
                  <option value="marble">Marble</option>
                  <option value="granite">Granite</option>
                  <option value="wood">Wood</option>
                  <option value="doors">Doors</option>
                </select>
              </div>
              {newProduct.category && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                  <select
                    value={newProduct.subcategory}
                    onChange={(e) => setNewProduct({ ...newProduct, subcategory: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select Subcategory</option>
                    {categories[newProduct.category as keyof typeof categories]?.map((sub) => (
                      <option key={sub} value={sub}>{sub.replace(/-/g, ' ')}</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleAddProduct}
                  className="flex-1 bg-brand-red text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors duration-200"
                >
                  Add Product
                </button>
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
