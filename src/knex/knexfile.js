module.exports={
    development:{
        client: 'mysql2',
        connection:{
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DATABASE
        },
        migrations:{
            tableName: 'knex_migrations',
            directory: './migrations'
        },
        useNullAsDefault: true,
    }
};