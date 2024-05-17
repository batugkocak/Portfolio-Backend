const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/education");

const authenticateUser = require("../middlewares/verify-auth");

router.route("/").get(getAll).post(authenticateUser, createEducation);

router
  .route("/:id")
  .patch(authenticateUser, updateEducation)
  .delete(authenticateUser, deleteEducation)
  .get(authenticateUser, getOne);

module.exports = router;
