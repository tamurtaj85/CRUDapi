"use strict";

const mongoose = require('mongoose');

const mongoSchema = mongoose.Schema;

const taskSchema = new mongoSchema({
  name: {
    type: String,
    required: "Kindly enter the name of the task",
  },

  Created_date: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"],
      },
    ],
    default: ["pending"],
  },
});

module.exports = mongoose.model('Tasks', taskSchema);
