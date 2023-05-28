const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(
    '<body><form action="/product" method="post"> <input type="text" name="title" id=""> <button type="submit">submit</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  res.send(req.body);
});
module.exports = router;
