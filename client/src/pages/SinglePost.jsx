import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/posts/${id}`);
        const data = await response.json();
        setPost(data.post || data);
      } catch (err) {
        setError('Failed to fetch post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center py-12">
          <div className="text-lg">Loading post...</div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-red-500 text-center py-12">
          {error || 'Post not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <span>By {post.author || 'Unknown'}</span>
          <span>•</span>
          <span>{new Date(post.createdAt || Date.now()).toLocaleDateString()}</span>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {post.content || 'No content available for this post.'}
          </p>
        </div>
      </article>
    </div>
  );
};

export default SinglePost;