const tweetRoutes = require('./tweets/routes.js');

const routeMapper = {
    use: (app) => {
        app.use('/api', tweetRoutes);
    }
};

module.exports = routeMapper;
