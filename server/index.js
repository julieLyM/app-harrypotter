const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

middlewares(app);
routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`hello harry potter server on port ${PORT}`)
);
