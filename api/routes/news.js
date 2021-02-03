const express = require('express');
const router = express.Router();

const { getNews, getCategoryNews, getCountryNews } = require('../controllers/news')

router.get('/articles', getNews);
router.get('/articles/category/:category', getCategoryNews);
router.get('/articles/country/:country', getCountryNews);

// router.post('/tag', create);

module.exports = router; 
