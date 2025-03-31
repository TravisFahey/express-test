const BlogPost = require("../models/BlogPost");

const renderHomePage = async (req, res) => {
    const posts = await BlogPost.find().sort({ createdAt: -1 }); // show latest 3
    res.render('index', { 
        title: 'Home', 
        posts
    });
};

module.exports = { renderHomePage };