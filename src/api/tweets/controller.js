const TweetModel = require('./model.js');

const controller = {
    getAll: (req, res) => {
        TweetModel.find().exec()
            .then((result) => {
                res.status(200).json({
                    result
                });
            });
    }
};

module.exports = controller;
