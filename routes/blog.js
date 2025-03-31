const express = require('express');
const router = express.Router(); // ✅ Call it as a function to get a router instance
const blogController = require('../controllers/blogController');

// GET /blog - Get all posts
router.get('/', blogController.getAllPosts);

// POST /blog - Create a new post
router.post('/', blogController.createPost);

module.exports = router;

