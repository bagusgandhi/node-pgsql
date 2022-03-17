const { Sequelize } = require('sequelize');
module.exports = new Sequelize('codegig', 'vhiolite', 'pass123PASS', {
    host: 'localhost',
    dialect: 'postgres',
    port: 54320,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});