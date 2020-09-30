const http = require('http');
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
  
  // lodash
  const num = _.random(0, 20);
  console.log(num)
  const greet = () => {
    console.log('hello')
  }
  greet()
  greet()
  // set header content type
  res.setHeader('Content-Type', 'text/html') // text/plain
  // res.write('<p>hello, le anh vu</p>')
  // res.write('<p>Hello again, le anh vu</p>')

  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200
      break;
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break;
    case '/about-me':
      res.setHeader('location', '/about')
      res.statusCode = 301
      res.end()
      break;
    default:
      path += '404.html'
      res.statusCode = 404
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    }
    else {
      // res.write(data)
      res.end(data)
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000')
});
