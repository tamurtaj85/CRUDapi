const mongoose = require("mongoose");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

require('../api/models/toDoListModel'); //created model loading here