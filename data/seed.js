const BlogPost = require('../models/blogPost');

// This function creates and saves a few dummy posts
async function seedBlogPosts() {
  const existing = await BlogPost.find();
  if (existing.length > 0) return; // Avoid reseeding on every restart

  await BlogPost.insertMany([
    {
      title: 'First Blog Post',
      content: 'This is my first test post. Hello world!',
      author: 'Alice'
    },
    {
      title: 'Second Blog Post',
      content: 'More content coming soon...',
      author: 'Bob'
    },
    {
      title: 'Blog Creation',
      content: 'I created this small blog test to display a small demo of using mongodb in memory. I decided to do couple this with express.js to create a full' +
      'javascript solution to full stack development.',
      author: 'Creator'
    },
  ]);

  console.log('✅ Blog posts seeded!');
}

module.exports = seedBlogPosts;