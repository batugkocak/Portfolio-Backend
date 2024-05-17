const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    profession: {
      type: String,
      required: [true, "Profession is required"],
      trim: true,
      minlength: [2, "Profession must be at least 2 characters long"],
      maxlength: [50, "Profession cannot exceed 50 characters"],
      match: [/^[a-zA-Z\s]*$/, "Profession can only have letters and spaces"],
    },
    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
      minlength: [2, "Company name must be at least 2 characters long"],
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    dateRange: {
      type: String,
      required: [true, "Date Range is required."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
