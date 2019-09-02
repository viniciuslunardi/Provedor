const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const port = process.env.PORT || 3001;
require("./controllers/ProviderController")(app);
require("./controllers/PlanController")(app);
require("./controllers/ClientController")(app);

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

