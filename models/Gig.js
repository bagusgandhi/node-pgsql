const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
    title: {
        type: Sequelize.STRING
    },
    technologies: {
        type: Sequelize.STRING
    },
    buget: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.STRING
    },
    updatedAt: {
        type: Sequelize.STRING
    }
});

module.exports = Gig;