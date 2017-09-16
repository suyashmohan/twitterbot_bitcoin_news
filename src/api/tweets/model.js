const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    text: String,
    userName: String,
    userDescription: String,
    retweetCount: Number
});

const TweetModel = mongoose.model('Tweet', TweetSchema);

module.exports = TweetModel;
