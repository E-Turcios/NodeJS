const http = require('http');

const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use((req, res, next) => {
  res.send('<h1> Hello World </h1>');
});
const server = http.createServer(app);
server.listen(process.env.PORT);
