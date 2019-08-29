const express = require('express');
const Plan = require('../models/Plan');
const router = express.Router();

router.post('/register-plan', async (req, res) => {

    const { name } = req.body;
    try {
        if (await Plan.findOne({ name })) {
            return res.send(400).send({ error: 'Plan already exists'})
        }

        const plan = await Plan.create(req.body);

        // const client = await Client.create(req.body);
        // const plan = await Plan.create(req.body);

        return res.send({ plan });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }

});

router.post('/authenticated-plan', async (req, res) => {
    const { name } = req.body;
    const plan = await Plan.findOne({name});
    if (!plan) {
        return res.status(400).send({error: "Plan not found"});
    }
    //  //
    // const token = jwt.sign({ id: provider.id});
});

module.exports = app => app.use("/auth", router);