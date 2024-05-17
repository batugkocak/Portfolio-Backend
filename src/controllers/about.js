const About = require("../models/About");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const createOrUpdate = async (req, res) => {
  let about = await About.findOne({});

  if (about) {
    about = await About.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });
    res
      .status(StatusCodes.OK)
      .json({ data: about, message: "About updated successfully" });
  } else {
    about = await About.create(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ data: about, message: "About created successfully" });
  }
};

const get = async (req, res) => {
  const about = await About.find({});

  if (about.length <= 0) {
    throw new NotFoundError();
  }

  res.status(StatusCodes.OK).json({ data: about[0] });
};

module.exports = {
  createOrUpdate,
  get,
};
