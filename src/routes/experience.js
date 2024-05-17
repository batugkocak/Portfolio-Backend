const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  createExperience,
  deleteExperience,
  updateExperience,
} = require("../controllers/experience");

const authenticateUser = require("../middlewares/verify-auth");

router.route("/").get(getAll).post(authenticateUser, createExperience);

router
  .route("/:id")
  .patch(authenticateUser, updateExperience)
  .delete(authenticateUser, deleteExperience)
  .get(authenticateUser, getOne);

module.exports = router;
