const express = require('express');
const Provider = require('../models/Provider');
const router = express.Router();

router.post('/register-provider', async (req, res) => {

    const { name } = req.body;
    try {
        if (await Provider.findOne({ name })) {
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

router.post('/authenticated-provider', async (req, res) => {
    const { name } = req.body;
    const provider = await Provider.findOne({name});
    if (!provider) {
        return res.status(400).send({error: "Provider not found"});
    }
   //  //
   // const token = jwt.sign({ id: provider.id});
});

module.exports = app => app.use("/auth", router);