const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const config = require('./config.js');
const apiRoutes = require('./api/routes.js');

// Create Express App
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure Mongoose
mongoose.Promise = Promise;
mongoose.connect(config.MONGODB.getConnectionStr(), {
    useMongoClient: true
});

// Configure the routes
apiRoutes.use(app);

// Not Found
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

// Error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Internal Server Error'
    });
});

module.exports = app;
