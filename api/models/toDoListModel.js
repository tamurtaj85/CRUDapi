"use strict";

import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

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

taskSchema.plugin(mongoosePaginate);

export const Tasks = mongoose.model("Tasks", taskSchema);
