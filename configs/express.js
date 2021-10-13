import express from "express";
import bodyParser from "body-parser";
import { routes_ToDoList } from "../api/routes/index.js";
import { notFound } from "../middleWare/middleware.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes_ToDoList(app);

app.listen(port);

app.use(notFound);

console.log("todo list RESTful API server started on: " + port);
