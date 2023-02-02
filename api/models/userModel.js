"use strict";

import mongooes from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongooes.Schema({
  firstName: {
    type: String,
    required: 'Cannot leave first name blank while signing up.',
    trim: true,
  },

  lastName: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    required: 'Cannot leave email blank while signing up.',
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: 'Cannot leave password blank while signing up.',
    trim: true,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

export const User = mongooes.model("User", userSchema);
