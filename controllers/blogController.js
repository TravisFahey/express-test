const BlogPost = require('../models/BlogPost');

// GET /blog - return all blog posts as JSON
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /blog - create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = await BlogPost.create({ title, content, author });
    res.status(200).json(newPost);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Failed to create post' });
  }
};
