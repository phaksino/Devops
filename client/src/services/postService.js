import api from '../hooks/useApi';

export const postService = {
  // Get all posts with filters
  getPosts: (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    });
    return api.get(`/posts?${params}`);
  },

  // Get single post
  getPost: (id) => api.get(`/posts/${id}`),

  // Create post
  createPost: (postData) => api.post('/posts', postData),

  // Update post
  updatePost: (id, postData) => api.put(`/posts/${id}`, postData),

  // Delete post
  deletePost: (id) => api.delete(`/posts/${id}`),

  // Add comment
  addComment: (postId, comment) => api.post(`/posts/${postId}/comments`, comment)
};

export const categoryService = {
  getCategories: () => api.get('/categories'),
  createCategory: (categoryData) => api.post('/categories', categoryData)
};

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me')
};