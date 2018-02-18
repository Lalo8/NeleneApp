const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CATEGORIES = [
  "marketing & communication",
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
    required: false
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
    type: String,
    required: true
  },
  contract: {
    type: String,
    enum: CONTRACTYPES
  },
  startdate: {
    type: String,
    required: false
  },
  conditions: {
    type: String,
    enum: CONDITIONS,
    default: "to define"
  },
  img: {
    type: String,
    default: "https://bulma.io/images/placeholders/96x96.png"
  }
});

module.exports = mongoose.model("Job", jobSchema);
