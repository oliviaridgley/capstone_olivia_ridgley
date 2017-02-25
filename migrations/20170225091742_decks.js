'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', table => {
    table.increments();
    table.string("title").notNullable();
    table.string("deck_image").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks')
};
