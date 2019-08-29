const express = require('express');

const Provider = require('../models/provedor');
//const Client = require("../models/cliente");


const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const provider = await Provider.create(req.body);

        return res.send({ provider });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }

});

module.exports = app => app.use("/auth", router);