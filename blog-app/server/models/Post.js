import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    maxlength: 300
  },
  featuredImage: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  tags: [String],
  isPublished: {
    type: Boolean,
    default: false
  },
  comments: [commentSchema],
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Auto-generate excerpt from content
postSchema.pre('save', function(next) {
  if (this.content && !this.excerpt) {
    this.excerpt = this.content.substring(0, 200) + '...';
  }
  next();
});

export default mongoose.model('Post', postSchema);