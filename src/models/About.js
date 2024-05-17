const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname must be provided!"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address must be provided!"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      match: [
        /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Please provide a valid phone number.",
      ],
    },
    email: {
      type: String,
      required: [true, "Email must be provided!"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email.",
      ],
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      maxLength: 500,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
