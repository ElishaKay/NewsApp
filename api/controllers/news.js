const news = require('gnews');
const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

exports.getNews = async (req, res) => {
  console.log('api/articles called!')
  const headlines = await news.headlines({n : 5});

  res.json(headlines);
}

exports.getCategoryNews = async (req, res) => {
  console.log('api/articles category called!');

  const headlines = await news.topic(req.params.category.toUpperCase(), {n : 5});
  res.json(headlines);
}


exports.getCountryNews = async (req, res) => {
  console.log('api/articles country called!');

  const headlines = await news.geo(req.params.country.toUpperCase(), {n : 5});
  res.json(headlines);
}