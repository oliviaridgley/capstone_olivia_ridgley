'use strict';
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const knex = require('knex');
const server = require("http").Server(app);

// Specify node modules, and the public folder.
app.use(express.static('./public'));

app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/js'));

// Require all routes
// const decks = require('./routes/decks')
// const cards = require('./routes/cards')

// Use all routes
// app.use('/decks', decks);
// app.use('/cards', cards);


// Wildcard Route, Sends the Index back incase of someone being where they shouldn't.
app.use('*', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

// Straight up, error handling. Not just 404 specific.
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

// App listener, just specifies port and the creation of the listener on that port.
server.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = app;
