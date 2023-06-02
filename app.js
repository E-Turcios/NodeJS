const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const { admin, shop } = require('./routes');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/admin', admin);
app.use('/shop', shop);

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/basic', (req, res) => {
  //hey this is the source for basic auth https://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4
  console.log(req.headers.authorization);

  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
  const [login, password] = Buffer.from(b64auth, 'base64')
    .toString()
    .split(':');

  console.log(login, password);
  res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
  res.status(401).send('Authentication required.'); // custom message
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(PORT, () => {
  console.log('listening on port http://localhost:' + PORT);
});
