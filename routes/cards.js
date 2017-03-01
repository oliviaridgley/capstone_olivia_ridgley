'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// GET all decks - id, question, deck_id.

router.get('/', (req, res, next) => {
  knex('cards')
    .select("id", "question", "deck_id")
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

// GET/:id - id, question, deck_id.

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('cards')
    .where('cards.id', id)
    .select("id", "question", "deck_id")
    .first()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err)
    });
});

//  POST - new card that returns id, question, and deck_id.

router.post('/', (req, res, next) => {
  const { question, deck_id } = req.body;
  const newQuestion = { question, deck_id };

  knex('cards')
    .insert(newQuestion, ['id', 'question', 'deck_id'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});


// PATCH:id - edit a deck and return updated id, question, and deck_id.

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const { question } = req.body;
  const updatedCard = { question };

  knex('cards')
    .where('cards.id', id)
    .update(updatedCard, ['id', 'question', 'deck_id'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});


// DELETE/:id - delete a deck based on id, return id, question, and deck_id.

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  knex('cards')
    .where("cards.id", id)
    .del(['id', 'question', 'deck_id'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});



module.exports = router;
