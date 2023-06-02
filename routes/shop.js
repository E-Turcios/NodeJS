const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/rootDir');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.post('/product', (req, res, next) => {
  res.send(req.body);
});
module.exports = router;
