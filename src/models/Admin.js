const mongoose = require("mongoose");
const AuthUtil = require("../utils/authUtil");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Userame must be provided!"],
      match: [/^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password must be provided!"],
      minlength: 6,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  this.password = await AuthUtil.createHashedPassword(this.password);
});

module.exports = mongoose.model("User", userSchema);
