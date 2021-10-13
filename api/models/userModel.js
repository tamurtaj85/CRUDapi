"use strict";

import mongooes from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongooes.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongooes.model("User", userSchema);
