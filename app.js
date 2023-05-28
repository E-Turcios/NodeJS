const express = require('express');
const dotenv = require('dotenv');
const { admin, shop } = require('./routes');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use('/admin', admin);
app.use('/shop', shop);

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.use((req, res) => {
  res.status(404).send('<h1>404 page not found<h1/>');
});
app.listen(PORT, () => {
  console.log('listening on port http://localhost:' + PORT);
});
