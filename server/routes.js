const charactersRouter = require('./routes/charactersRouter');
const hatsRouter = require('./routes/hatsRouter')
const spellsRouter = require('./routes/spellsRouter')
const housesRouter = require('./routes/housesRouter')

function routes(app) {
  app.use('/api/v1/characters', charactersRouter);
  app.use('/api/v1/spells', spellsRouter);
  app.use('/api/v1/houses', housesRouter);
  app.use('/api/v1/hats', hatsRouter);
}

module.exports = routes;
