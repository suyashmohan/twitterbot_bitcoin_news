const title = 'search twiter';
const interval = '1 second';
const callback = (job, done) => {
    console.log('Callback');
    done();
};

module.exports = {
    title,
    callback,
    interval
};
