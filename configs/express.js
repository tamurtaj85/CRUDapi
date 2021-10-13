import express from "express";
import bodyParser from "body-parser";
import { config } from "./configs.js";
import { routes_ToDoList, routes_user } from "../api/routes/index.js";
import { notFound } from "../middleWare/middleware.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

await routes_ToDoList(app);
await routes_user(app);

app.listen(config.port);

app.use(notFound);

console.log("todo list RESTful API server started on: " + port);
