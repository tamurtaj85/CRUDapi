import mongoose from "mongoose";
import { config } from "./configs.js";

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);

await import("../api/models/index.js"); // Loading all the residing models from [model/index.js]
