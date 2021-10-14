"use strict";

import { Tasks } from "../models/index.js";

function listAllTasks(req, res) {
  Tasks.find({}, function (err, task) {
    if (err) res.send(err);

    res.json(task);
  });
}

function createTask(req, res) {
  var new_task = new Tasks(req.body);

  new_task.save(function (err, task) {
    if (err) res.send(err);

    res.json(task);
  });
}

function readTask(req, res) {
  Tasks.findById(req.params.taskId, function (err, task) {
    if (err) res.send(err);

    res.json(task);
  });
}

function updateTask(req, res) {
  Tasks.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    function (err, task) {
      if (err) res.send(err);
      res.json(task);
    }
  );
}

function deleteTask(req, res) {
  Tasks.deleteOne(
    {
      _id: req.params.taskId,
    },
    function (err, task) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
}

export { listAllTasks, createTask, readTask, updateTask, deleteTask };
