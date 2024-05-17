const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  createContact,
  updateContact,
  deleteContact,
  markAsRead,
} = require("../controllers/contact");

const authenticateUser = require("../middlewares/verify-auth");

router.route("/").get(authenticateUser, getAll).post(createContact);

router
  .route("/:id")
  .delete(authenticateUser, deleteContact)
  .get(authenticateUser, getOne)
  .post(authenticateUser, markAsRead);

module.exports = router;
