const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
const CATEGORIES = [
  "marketing",
  "communication",
  "web development",
  "finance",
  "science",
  "research",
  "business development"
];
const CONTRACTYPES = [
  "permament contract",
  "fixed-term contract",
  "internship",
  "voluntareeing",
  "to define"
];
const CONDITIONS = ["remotely", "in residence", "to define"];

const jobSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  profile: {
    type: String,
    required: false
  },
  contact: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: false,
    default: "undefined"
  },
  deadline: {
    type: String,
    required: false
  },
  category: {
    type: String,
    enum: CATEGORIES,
    default: "startup"
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Organisation",
    required: true
  },
  contract: {
    type: String,
    enum: CONTRACTYPES
  },
  startdate: {
    type: String,
    required: false,
    default: "30/05/2018"
  },
  conditions: {
    type: String,
    enum: CONDITIONS,
    default: "in residence"
  },
  img: {
    type: String,
    default: "https://bulma.io/images/placeholders/96x96.png"
  }
});

module.exports = mongoose.model("Job", jobSchema);
