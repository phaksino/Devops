import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.content || 'No content available'}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500 font-medium">
            By {post.author || 'Unknown'}
          </span>
          <Link 
            to={`/posts/${post.id || post._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;