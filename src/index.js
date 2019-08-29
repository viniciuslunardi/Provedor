const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('./', (req, res) => {
        res.send("OK");
});

require("./controllers/ProviderController")(app);
require("./controllers/PlanController")(app);
require("./controllers/ClientController")(app);


app.listen(3000);