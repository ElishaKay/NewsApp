const news = require('gnews');
const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

exports.displayNews = async (req, res, next) => {
    const headlines = await news.headlines({n : 5});
    
    // for (let article of starship) {
    //     console.log(article.pubDate + ' | ' + article.title);
    // }

    res.send(awesomeTemplateCSS()+awesomeTemplateHTML({headlines}));
}