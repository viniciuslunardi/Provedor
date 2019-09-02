const mongoose = require('../database');

const ClientSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    plan: {
        type: Array,
        required: true
    },

    sign_date: {
        type: Date,
        required: true
    }
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;