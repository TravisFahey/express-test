var express = require('express');
var router = express.Router();
const { renderHomePage } = require('../controllers/homeController'); // Import controller

/* GET home page. */
router.get('/', renderHomePage);

module.exports = router;