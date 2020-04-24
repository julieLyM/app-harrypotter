const express = require('express');
const path = require('path');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

middlewares(app);
routes(app);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname + '/../build/index.html'))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`hello harry potter server on port ${PORT}`)
);
