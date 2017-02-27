'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments();
    table.string("question").notNullable();
    table.integer("deck_id").references('id').inTable('decks');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
