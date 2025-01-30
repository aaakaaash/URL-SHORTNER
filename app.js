require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const redisClient = require("./config/redis");
const passport = require("passport");
const helmet = require("helmet"); 
const routes = require("./router/route");


db();

const app = express();


app.use(helmet());


app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000", // Allow frontend requests
    credentials: true,
  })
);


app.use(express.json());


app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET || "defaultSecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  })
);


app.use(passport.initialize());
app.use(passport.session());


app.use(routes);


app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
