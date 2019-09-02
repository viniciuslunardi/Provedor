const mongoose = require('../database');

const ProviderSchema = new mongoose.Schema({

  name: {
      type: String,
      required: true
  } ,

  cnpj: {
      type: String,
      required: true
  },

  plans: {
      type: Array,
      required: true
  }
});

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = Provider;