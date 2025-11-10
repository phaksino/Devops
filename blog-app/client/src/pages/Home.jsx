import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">MERN Blog</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          A beautiful, modern blog platform built with the MERN stack. 
          Share your stories, connect with readers, and express your creativity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/posts"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            📚 Explore Posts
          </Link>
          <Link 
            to="/create-post"
            className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-lg font-semibold"
          >
            ✏️ Write a Post
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Modern Stack</h3>
          <p className="text-gray-600 leading-relaxed">
            Built with MongoDB, Express, React, and Node.js for optimal performance and scalability.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📱</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Responsive Design</h3>
          <p className="text-gray-600 leading-relaxed">
            Perfect experience on all devices - desktop, tablet, and mobile.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔒</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Secure & Reliable</h3>
          <p className="text-gray-600 leading-relaxed">
            JWT authentication and MongoDB Atlas ensure your data is safe and accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;