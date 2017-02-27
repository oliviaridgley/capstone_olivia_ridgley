'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/folkways_dev'
  },
  //Dont have testing database
  test: {
    client: 'pg',
    connection: 'postgres://localhost/folkways_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'folkways_dev'
  }
};
