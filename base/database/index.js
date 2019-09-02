const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/devoznet', { useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;