const mongoose = require('../database');
const Provider = require('provedor');

const PlanSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    value: {
        type: String,
        required: true
    },

    provider: {
        type: Provider,
        required: true
    },

    clients: {
        type: Array,
        required: true
    }
});

const Plan = mongoose.model("Plan", PlanSchema);