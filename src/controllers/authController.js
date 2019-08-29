const express = require('express');

const Provider = require('../models/provedor');
// const Client = require("../models/cliente");
// const Plan = require('../models/plano');
//

const router = express.Router();

router.post('/register', async (req, res) => {

    const { id } = req.body;
    try {
        if (await Provider.findOne({ id })) {
            return res.send(400).send({ error: 'Provider already exists'})
        }

        const provider = await Provider.create(req.body);

        // const client = await Client.create(req.body);
        // const plan = await Plan.create(req.body);

        return res.send({ provider });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }

});

module.exports = app => app.use("/auth", router);