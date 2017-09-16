const TweetModel = require('./model.js');

const controller = {
    getAll: (req, res) => {
        const limit = parseInt(req.query.limit) || 10;
        const sortQuery = {};
        if (req.query.sort !== undefined) {
            sortQuery.retweetCount = -1;
        }

        TweetModel.find()
            .limit(limit)
            .sort(sortQuery)
            .exec()
            .then((result) => {
                res.status(200).json({
                    result
                });
            });
    }
};

module.exports = controller;
