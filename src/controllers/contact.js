const Contact = require("../models/Contact");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getAll = async (req, res) => {
  const contacts = await Contact.find({}).select("-__v");
  res.status(StatusCodes.OK).json({ data: contacts, count: contacts.length });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id).select("-__v");
  if (!contact) {
    throw new NotFoundError(`No contact with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ data: contact });
};

const createContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(StatusCodes.CREATED).json({ contact });
};

const deleteContact = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findByIdAndDelete({
    _id: id,
  });
  if (!contact) {
    throw new NotFoundError();
  }
  res.status(StatusCodes.OK).send();
};

const markAsRead = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findByIdAndUpdate(
    { _id: id },
    { read: true }, // Update the 'read' field to true
    { new: true, runValidators: true } // Return updated doc & run validators
  );

  if (!contact) {
    throw new NotFoundError(`No contact with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ data: contact }); // Send back the updated contact
};

module.exports = {
  getAll,
  getOne,
  createContact,
  markAsRead,
  deleteContact,
};
