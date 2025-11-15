import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 text-lg">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md mx-auto">
          <p className="text-lg font-semibold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">All Blog Posts</h1>
      <p className="text-gray-600 mb-8 text-lg">Discover amazing stories from our community</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <PostCard key={post.id || post._id} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-lg border border-gray-100">
          <p className="text-gray-500 text-xl mb-2">No posts found.</p>
          <p className="text-gray-400">Be the first to create a post!</p>
        </div>
      )}
    </div>
  );
};

export default Posts;