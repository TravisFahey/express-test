const mongoose = require('mongoose');

// Define the schema — structure of blog post
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },         
  content: { type: String, required: true },        
  author: { type: String, default: 'Anonymous' },   
  createdAt: { type: Date, default: Date.now }      
});

// ✅ Use existing model if already compiled
module.exports = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);