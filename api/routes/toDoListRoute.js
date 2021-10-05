'use strict';

// import toDoList from '../controllers/toDoListController.js';

module.exports = function module(app) {
    
  const toDoList = require('../controllers/toDoListController');

  // todoList Routes
  app.route('/tasks')
    .get(toDoList.listAllTasks)
    .post(toDoList.createTask);

  app.route('/tasks/:taskId')
    .get(toDoList.readTask)
    .put(toDoList.updateTask)
    .delete(toDoList.deleteTask);
};

