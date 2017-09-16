const http = require('http');
const app = require('./app.js');
const config = require('./config.js');

const server = http.createServer(app);
server.listen(config.PORT);

server.on('error', (err) => {
    console.error(err);
});

server.on('listening', () => {
    const addr = server.address();
    console.log(`Server started at ${addr.port}`);
});
