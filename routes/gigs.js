const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

router.get('/', (req, res) => {
    Gig.findAll()
    .then((gigs) => {
        console.log(gigs);
        res.sendStatus(200);
    })
    .catch((e) => console.log(e));
});
//file https://www.youtube.com/watch?v=67OhLlFPqFQ 

router.get('/add', (req, res) => {
    const data = {
        title: "looking for nodejs developer",
        technologies: "nodejs, kubernetes, docker, wordpress",
        buget: "8000000",
        description: "lorem ipsum dolor sit amet",
        contact_email: "vhiolite@gmail.com"
    }

    let { title, technologies, buget, description, contact_emai } = data; 

    Gig.create({
        title,
        technologies,
        buget,
        description,
        ontact_email


    });
});


module.exports = router;
