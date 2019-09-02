const express = require('express');
const Client = require("../models/Client");
const router = express.Router();

router.post('/register-client', async (req, res) => {

    const { name } = req.body;
    try {
        if (await Client.findOne({ name })) {
            return res.send(400).send({ error: 'Client already exists'})
        }

        const client = await Client.create(req.body);

        // const client = await Client.create(req.body);
        // const plan = await Plan.create(req.body);

        return res.send({ client });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }

});

router.post('/authenticated-client', async (req, res) => {
    const { name } = req.body;
    const client = await Client.findOne({name});
    if (!client) {
        return res.status(400).send({error: "Client not found"});
    }
    //  //
    // const token = jwt.sign({ id: provider.id});
});

module.exports = app => app.use("/auth", router);