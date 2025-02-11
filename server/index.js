require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database is up and running!");
});

// ENDPOINTS
// AUTH ENDPOINTS

// // USER ENDPOINTS

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on ${SERVER_PORT}`)
);
