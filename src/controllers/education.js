const Education = require("../models/Education");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getAll = async (req, res) => {
  const educations = await Education.find({}).select("-__v");
  res
    .status(StatusCodes.OK)
    .json({ data: educations, count: educations.length });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const education = await Education.findById(id).select("-__v");
  res.status(StatusCodes.OK).json({ data: education });
};

const createEducation = async (req, res) => {
  const education = await Education.create(req.body);
  res.status(StatusCodes.CREATED).json({ education });
};

const updateEducation = async (req, res) => {
  const { id } = req.params;

  const education = await Education.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!education) {
    throw new NotFoundError();
  }
  res.status(StatusCodes.OK).json({ education });
};

const deleteEducation = async (req, res) => {
  const { id } = req.params;

  const education = await Education.findByIdAndDelete({
    _id: id,
  });
  if (!education) {
    throw new NotFoundError();
  }
  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAll,
  getOne,
  createEducation,
  updateEducation,
  deleteEducation,
};
