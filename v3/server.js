const http = require('http');
const { send } = require('process');
const server = http.createServer((req, res) => {
  console.log('request made')
  
});

server.listen(1412, 'localhost', () => {
  console.log('listening for request on port 1412')
});
