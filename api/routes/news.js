const express = require('express');
const router = express.Router();

const { getNews, getCategoryNews } = require('../controllers/news')


router.get('/articles', getNews);
router.get('/articles/category/:category', getCategoryNews);


// router.post('/tag', create);
// router.get('/tags', list);
// router.delete('/tag/:slug', remove);
// router.put('/tag/:slug', update);

// place holder for the data
const users = [];

router.get('/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

router.post('/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

module.exports = router; 
