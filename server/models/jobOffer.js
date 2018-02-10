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

const jobOfferSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: CATEGORIES,
    default: "startup"
  },
  deadline: {
    type: String,
    required: true
  },
  contract: {
    type: String,
    enum: CONTRACTYPES
  },
  country: {
    type: String,
    required: true
  },
  startdate: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default: "https://bulma.io/images/placeholders/96x96.png"
  }
});

module.exports = mongoose.model("jobOffer", jobOfferSchema);
