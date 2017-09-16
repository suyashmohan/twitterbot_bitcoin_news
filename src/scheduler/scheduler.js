const Agenda = require('agenda');
const config = require('../config.js');
const twitterTask = require('./tasks/twitter.js');

const start = () => {
    const jobs = [
        twitterTask
    ];

    const agenda = new Agenda({
        db: {
            address: config.MONGODB.getConnectionStr(),
            collection: 'jobs'
        }
    });

    jobs.forEach((job) => {
        agenda.define(job.title, job.callback);
    });

    agenda.on('ready', () => {
        jobs.forEach((job) => {
            agenda.every(job.interval, job.title);
        });
        agenda.start();
        console.log('Scheduler Started');
    });

    agenda.on('error', () => {
        console.error('Error in Scheduler');
    });

    const failGracefully = () => {
        console.log('Stopping Scheduler');
        agenda.stop(() => process.exit(0));
    };

    process.on('SIGTERM', failGracefully);
    process.on('SIGINT', failGracefully);
};

module.exports = {
    start
};
