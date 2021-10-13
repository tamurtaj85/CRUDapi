"use strict";

export async function routes_ToDoList(app) {
  const { toDoList } = await import("../controllers/index.js");

  // todoList Routes
  app.route("/tasks").get(toDoList.listAllTasks).post(toDoList.createTask);

  app
    .route("/tasks/:taskId")
    .get(toDoList.readTask)
    .put(toDoList.updateTask)
    .delete(toDoList.deleteTask);
}
