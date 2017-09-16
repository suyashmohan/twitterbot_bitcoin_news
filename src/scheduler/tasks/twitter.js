const twitter = require('../../services/twitter.js');
const TwitterModel = require('../../api/tweets/model.js');

const keywords = 'bitcoin OR blockchain';
const title = 'search twiter';
const interval = '30 minutes';
const callback = (job, done) => {
    console.log('Twitter : search/tweets - ', keywords);
    twitter.searchKeywords(keywords, (err, tweets, res) => {
        if (err) {
            console.error('Twitter', err);
        } else {
            saveTweets(tweets.statuses);
        }
    });
    done();
};

const saveTweets = (tweets) => {
    tweets.forEach((tweet) => {
        const tweetModel = new TwitterModel();
        tweetModel.id = tweet.id;
        tweetModel.createdAt = new Date(tweet.created_at);
        tweetModel.text = tweet.text;
        tweetModel.userName = tweet.user.name;
        tweetModel.userDescription = tweet.user.description;
        tweetModel.retweetCount = tweet.retweet_count;

        tweetModel.save();
    });
};

module.exports = {
    title,
    callback,
    interval
};
