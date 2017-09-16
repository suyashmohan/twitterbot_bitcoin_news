module.exports = {
    PORT: 8080,
    MONGODB: {
        URL: 'localhost',
        NAME: 'twitterBot',
        getConnectionStr: function () {
            return `mongodb://${this.URL}/${this.NAME}`;
        }
    }
};
