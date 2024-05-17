const Experience = require("../models/Experience"); // Import the Experience model
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getAll = async (req, res) => {
  const experiences = await Experience.find({}).select("-__v");
  res
    .status(StatusCodes.OK)
    .json({ data: experiences, count: experiences.length });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const experience = await Experience.findById(id).select("-__v");

  if (!experience) {
    throw new NotFoundError(`No experience with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ data: experience });
};

const createExperience = async (req, res) => {
  const experience = await Experience.create(req.body);
  res.status(StatusCodes.CREATED).json({ data: experience });
};

const updateExperience = async (req, res) => {
  const { id } = req.params;

  const experience = await Experience.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!experience) {
    throw new NotFoundError(`No experience with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ data: experience });
};

const deleteExperience = async (req, res) => {
  const { id } = req.params;
  const experience = await Experience.findByIdAndDelete({ _id: id });

  if (!experience) {
    throw new NotFoundError(`No experience with id ${id}`);
  }

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAll,
  getOne,
  createExperience,
  updateExperience,
  deleteExperience,
};
