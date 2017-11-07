const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const STATUSES = [
  "entrepreneur",
  "incubatorMember",
  "investor",
  "student",
  "employee"
];

const userSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  email: {
    type: String
  },
  status: {
    type: String,
    enum: STATUSES,
    default: "entrepreneur"
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
