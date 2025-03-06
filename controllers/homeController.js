// controllers/homeController.js

const renderHomePage = (req, res) => {
    res.render('index', { title: 'Express' });
};

module.exports = { renderHomePage };