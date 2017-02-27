'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// GET all Decks - id, title, deck_image.

router.get('/', (req, res, next) => {
  knex('decks')
    .select("id", "title", "deck_image")
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      return res.status(200).send(results);
    })
    .catch(err => {
      next(err);
    });
});

// GET/:id - id, title, deck_image.

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('decks')
    .where('decks.id', id)
    .select("id", "title", "deck_image")
    .first()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

// POST - new deck that returns id, title, deck_image.

router.post("/", (req, res, next) => {
  const { title, deck_image } = req.body;
  const newDeck = { title, deck_image };

  knex('decks')
    .insert(newDeck, ['id', 'title', 'deck_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

// PATCH/:id - edit a deck return updated id, title, and deck_image

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const { title, deck_image } = req.body;
  const updatedDeck = { title, deck_image };

  knex('decks')
    .where("decks.id", id)
    .update(updatedDeck, ['id', 'title', 'deck_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

// DELETE/:id - delete a deck based on id, return id, title, and deck_image.

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  knex('decks')
    .where("decks.id", id)
    .del(['id', 'title', 'deck_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});


module.exports = router;
