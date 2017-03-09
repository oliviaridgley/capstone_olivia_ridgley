'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('decks').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('decks').insert({
          id: 1,
          title: 'Questions That Lead to Love',
          deck_image: 'assets/seed_photos/hand_circle.jpg'
        }),
        knex('decks').insert({
          id: 2,
          title: 'Sunday Supper',
          deck_image: 'assets/seed_photos/still_life.jpg'
        }),
        knex('decks').insert({
          id: 3,
          title: 'New Year, New You?',
          deck_image: 'assets/seed_photos/sea_abstract.jpg'
        }),
        knex('decks').insert({
          id: 4,
          title: 'You had me at "Hello World."',
          deck_image: 'assets/seed_photos/lady.jpg'
        }),
        knex('decks').insert({
          id: 5,
          title: 'Brevity, simplicity, and humanity.',
          deck_image: 'assets/seed_photos/hand_study.jpg'
        }),
        knex('decks').insert({
          id: 6,
          title: 'This or That?',
          deck_image: 'assets/seed_photos/birds.jpg'
        })
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('decks_id_seq', (SELECT MAX(id) FROM decks))");
    });
};
