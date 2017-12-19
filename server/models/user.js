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
const FIELD = ["Web Development", "Marketing", "Finance", "Data Analyst"];

const userSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  shortdescription: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  expertise: {
    type: String,
    enum: FIELD,
    default: "Web Development"
  },
  status: {
    type: String,
    enum: STATUSES,
    default: "student"
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
