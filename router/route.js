
const express = require("express");
const passport = require("passport");
const loginController = require("../controllers/loginController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Login Route
router.get("/", loginController.renderLoginPage);

// Google OAuth Authentication
router.get("/auth/google", authMiddleware.authenticateGoogle);
router.get("/auth/google/callback", authMiddleware.googleCallback, loginController.redirectAfterGoogleAuth);



module.exports = router;