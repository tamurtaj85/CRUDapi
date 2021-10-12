const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('../api/routes/index');

app.listen(port);

require('../middleWare/middleware');

console.log("todo list RESTful API server started on: " + port);