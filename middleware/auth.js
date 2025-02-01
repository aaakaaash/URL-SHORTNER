const passport = require("passport");

const authMiddleware = {
  authenticateGoogle: passport.authenticate("google", { scope: ["profile", "email"] }),

  googleCallback: passport.authenticate("google", { failureRedirect: "/login" }),

  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("user/login");
  },
}

module.exports = authMiddleware;