'use strict';
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const knex = require('knex');
const bodyParser = require('body-parser');


// Specify node modules, and the public folder.
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/js'));

// Require all routes
const decks = require('./routes/decks');
const cards = require('./routes/cards');

// Use all routes
app.use('/decks', decks);
app.use('/cards', cards);


// Wildcard Route, Sends the Index.
app.use('*', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

// Non-404 specific error handling
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  if (err.status) {
    return res.status(err.status).send(err);
  }

  res.sendStatus(500);
});

// App listener, specifies port 8000.
app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
