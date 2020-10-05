const express = require('express')

// express app
const app = express();

// listen for requests

app.listen(3000)

app.get('/', (req, res) => {
  // res.send('<h1>Home page</h1>');
  res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
  // res.send('<h1>about page</h1>');
  res.sendFile('./views/about.html', { root: __dirname });
})

app.get('/about-us', (req, res) => {
  // res.send('<h1>about page</h1>');
  res.redirect('/about');
})

app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
})