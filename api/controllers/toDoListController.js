"use strict";

import { task } from "../models/index.js";

const listAllTasks = function (req, res) {
  task.find({}, function (err, task) {
    if (err) res.send(err);

    res.json(task);
  });
};

const createTask = function (req, res) {
  var new_task = new task(req.body);

  new_task.save(function (err, task) {
    if (err) res.send(err);

    res.json(task);
  });
};

const readTask = function (req, res) {
  task.findById(req.params.taskId, function (err, task) {
    if (err) res.send(err);

    res.json(task);
  });
};

const updateTask = function (req, res) {
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function (err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

const deleteTask = function (req, res) {
  task.deleteOne(
    {
      _id: req.params.taskId,
    },
    function (err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
};

export { listAllTasks, createTask, readTask, updateTask, deleteTask };
