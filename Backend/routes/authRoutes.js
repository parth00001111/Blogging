const express = require("express");
const router = express.Router();
const { middleware } = require("../middleware/auth");
const {
    signup, signin } = require('../controllers/authController')

router.post('/signup', middleware, signup)
router.post('/signin', middleware, signin)

module.exports = router