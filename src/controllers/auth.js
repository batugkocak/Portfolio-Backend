const Admin = require("../models/Admin");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const AuthUtil = require("../utils/authUtil");
const {
  INVALID_CREDENTIALS,
  MISSING_CREDENTIALS,
} = require("../constants/error_messages");

const register = async (req, res, next) => {
  const { roles, createdBy } = req.body;
  if (roles || createdBy) {
    throw new UnauthenticatedError();
  }

  const admin = await Admin.create({ ...req.body });
  const token = AuthUtil.createJWT(admin._id, admin.name);
  res.status(StatusCodes.CREATED).json({ token });
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError(MISSING_CREDENTIALS);
  }
  const admin = await Admin.findOne({ username });

  if (!admin || !(await AuthUtil.comparePassword(password, admin.password))) {
    throw new UnauthenticatedError(INVALID_CREDENTIALS);
  }
  const token = AuthUtil.createJWT(admin._id, admin.name);
  res.status(StatusCodes.OK).json({ token: token });
};

module.exports = {
  login,
  register,
};
