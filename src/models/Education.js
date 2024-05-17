const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: [true, "Institution name is required"],
      trim: true,
    },
    degree: {
      type: String, // "Bachelor's in Computer Science", "High School Diploma", etc.
      required: [true, "Degree is required."],
      trim: true,
    },
    dateRange: {
      type: String,
      required: [true, "Date Range is required."],
      trim: true,
    },
    gpa: {
      type: Number,
      required: [true, "Date Range is required."],
    },
    info: {
      type: String,
    },
  },
  { timestamps: true }
);

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;
