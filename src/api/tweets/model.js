const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userDescription: {
        type: String,
        default: ''
    },
    retweetCount: {
        type: Number,
        default: 0
    }
});

const TweetModel = mongoose.model('Tweet', TweetSchema);

module.exports = TweetModel;
