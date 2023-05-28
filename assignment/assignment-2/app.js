const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('middleware 1');
  next();
});

app.use('/user', (req, res, next) => {
  res.send('user middleware');
});

app.use((req, res, next) => {
  res.send('middleware 2');
});

app.listen(3000);
