const blogPost = require("../models/blogPost");

exports.getAllPosts = async (req, res) => {
    const posts = await blogPost.find().sort({ createdAt: -1});
    res.render('blog', {
        title: 'All Blog Posts',
        posts
      });
}

// POST /blog - Create a new post
exports.createPost = async (req, res) => {
    const { title, content, author } = req.body;
    await blogPost.create({ title, content, author });
    res.redirect('/blog');
  };