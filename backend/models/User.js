const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
});

module.exports = mongoose.model("User", userSchema);
