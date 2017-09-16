const Twitter = require('twitter');
const config = require('../config.js');

const client = new Twitter({
    consumer_key: config.TWITTER.CONSUMER_KEY,
    consumer_secret: config.TWITTER.CONSUMER_SECRET,
    access_token_key: config.TWITTER.ACCESS_TOKEN_KEY,
    access_token_secret: config.TWITTER.ACCESS_TOKEN_SECRET
});

const searchKeywords = (keywords, response) => {
    client.get('search/tweets', {q: keywords}, response);
};

module.exports = {
    searchKeywords
};
