require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");
const { pool } = require("./dbConfig");
const initializePassport = require("./passportConfig");

const app = express();
const PORT = process.env.PORT || 4000;

// Initialize Passport
initializePassport(passport);

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/users/register", checkAuthenticated, (req, res) =>
  res.render("register")
);
app.get("/users/login", checkAuthenticated, (req, res) => res.render("login"));
app.get("/users/dashboard", checkNotAuthenticated, (req, res) =>
  res.render("dashboard", { user: req.user?.first_name || "Guest" })
);

// Logout route with the new logout method
app.get("/users/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Handle logout errors
    }
    req.flash("success_msg", "You have logged out");
    res.redirect("/users/login");
  });
});

// Registration route
app.post("/users/register", async (req, res) => {
  const {
    first_name,
    last_name,
    username,
    email,
    phone_number,
    password,
    password2,
  } = req.body;

  let errors = [];
  if (
    !first_name ||
    !last_name ||
    !username ||
    !email ||
    !password ||
    !password2
  ) {
    errors.push({ message: "Please enter all fields" });
  }
  if (password.length < 6) {
    errors.push({ message: "Password must be at least 6 characters" });
  }
  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }
  if (errors.length > 0) {
    return res.render("register", { errors });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  pool.query(
    "INSERT INTO users (first_name, last_name, username, email, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, password",
    [first_name, last_name, username, email, phone_number, hashedPassword],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.render("register", {
          errors: [{ message: "Registration failed." }],
        });
      }
      req.flash("success_msg", "You are now registered. Please log in.");
      res.redirect("/users/login");
    }
  );
});

// Login route
app.post(
  "/users/login",
  passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true,
  })
);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
