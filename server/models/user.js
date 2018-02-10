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
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  img: {
    type: String,
    default:
      "https://res.cloudinary.com/hiwkem5s6/image/upload/v1515259150/Profile_avatar_placeholder_large_yzyag1.png"
  },
  email: {
    type: String
  },
  shortdescription: {
    type: String
  },
  country: {
    type: String
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
  jobExperience: [
    {
      period: { type: String, required: false, default: "" },
      company: { type: String, required: false, default: "" },
      country: { type: String, required: false, default: "" },
      title: { type: String, required: false, default: "" },
      description: { type: String, required: false, default: "" }
    }
  ],
  isAdmin: {
    type: Boolean,
    default: false
  },
  isJobSeeker: {
    type: Boolean,
    default: false
  },
  isStartupSeeker: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email"
});

// userSchema.pre("save", function(next) {
//   if (!this.jobExperience[0]) {
//     this.jobExperience[0] = {};
//     this.jobExperience[0].period = "";
//     this.jobExperience[0].company = "";
//     this.jobExperience[0].country = "";
//     this.jobExperience[0].title = "";
//     this.jobExperience[0].description = "";

//     return next;
//   }
// });

module.exports = mongoose.model("User", userSchema);
