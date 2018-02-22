const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use(express.static('../dist'));

app.listen(3000, () => {
  console.log('...listening to port 3000');
});
