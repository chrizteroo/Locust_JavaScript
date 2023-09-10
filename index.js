const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.send('Slow')
  }, 2000)
})

app.listen(port, () => {
  console.log("Server is up!");

});