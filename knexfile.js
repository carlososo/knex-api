// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'ziggy.db.elephantsql.com',
      database: 'fsmfpilw',
      user:     'fsmfpilw',
      password: 'NZzeK4nw8ttfPAWufguQ9971Seh3S4Pq'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'ziggy.db.elephantsql.com',
      database: 'fsmfpilw',
      user:     'fsmfpilw',
      password: 'NZzeK4nw8ttfPAWufguQ9971Seh3S4Pq'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
