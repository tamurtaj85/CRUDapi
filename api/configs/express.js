import express from "express";
import bodyParser from "body-parser";
import { config } from "./configs.js";
import { routes_ToDoList, routes_User, routes_Auth } from "../routes/index.js";
import { notFound, protect } from "../middleWare/middleware.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

await routes_ToDoList(app);
await routes_User(app);
await routes_Auth(app);

app.listen(config.port);

app.use(await protect);
app.use(notFound);

console.log("todo list RESTful API server started on: " + config.port);
