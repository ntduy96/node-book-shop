const http = require('http');
const app = require('./app');

const server = http.createServer(app);

// specify port the app running on
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('====================================');
  console.log('server is running on port ' + port);
  console.log('====================================');
});
