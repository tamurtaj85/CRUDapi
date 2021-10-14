"use strict";

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
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

export const Tasks = mongoose.model("Tasks", taskSchema);
