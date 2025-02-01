const loginController = {
  renderLoginPage: async (req, res) => {
      try {
          if (req.isAuthenticated()) {
              return res.redirect("/dashboard");
          }
          return res.render("user/login");
      } catch (error) {
          console.error("Error rendering login page:", error);
          res.status(500).send("Internal Server Error");
      }
  },

  redirectAfterGoogleAuth: async (req, res) => {
      try {
          res.redirect("user/dashboard");
      } catch (error) {
          console.error("Error redirecting after Google auth:", error);
          res.status(500).send("Internal Server Error");
      }
  }
};

module.exports = loginController;
