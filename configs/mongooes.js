import mongoose from "mongoose";

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ToDo_db");

await import("../api/models/index.js"); // Loading all the residing models from [model/index.js]
