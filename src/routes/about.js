const express = require("express");
const router = express.Router();
const { get, createOrUpdate } = require("../controllers/about");

const authenticateUser = require("../middlewares/verify-auth");

router.route("/").get(get).post(authenticateUser, createOrUpdate);

module.exports = router;
