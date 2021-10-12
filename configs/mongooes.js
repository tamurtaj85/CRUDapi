const mongoose = require("mongoose");
require("./api/models/toDoListModel"); //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");
