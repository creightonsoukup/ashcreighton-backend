// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'ashcreighton'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: 'postgres://vxvefrlkzhhfnc:07bf6f73a1aef071f0714d831fc42e162440af7e5eb822c420aabc597b0b23c9@ec2-54-243-124-240.compute-1.amazonaws.com:5432/dargo1l27hjtcv?ssl=true',
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
