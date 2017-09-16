module.exports = {
    PORT: 8080,
    MONGODB: {
        URL: 'localhost',
        NAME: 'twitterBot',
        getConnectionStr: function () {
            return `mongodb://${this.URL}/${this.NAME}`;
        }
    },
    TWITTER: {
        CONSUMER_KEY: '',
        CONSUMER_SECRET: '',
        ACCESS_TOKEN_KEY: '',
        ACCESS_TOKEN_SECRET: ''
    }
};
