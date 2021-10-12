const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("../api/routes");
routes(app);

app.listen(port);

const middleWare = require("../middleWare/middleware");
app.use(middleWare.notFound);

console.log("todo list RESTful API server started on: " + port);
