const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { pool } = require("./dbConfig");

function initialize(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          // Query the database to find the user by email
          const { rows } = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
          );

          // If no user found, return an error
          if (rows.length === 0) {
            return done(null, false, { message: "No user with that email" });
          }

          const user = rows[0];

          // Compare password with hashed password in database
          const isMatch = await bcrypt.compare(password, user.password);

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // Serialize user id into session
  passport.serializeUser((user, done) => {
    done(null, user.id); // Store user id in the session
  });

  // Deserialize user id from session to user object
  passport.deserializeUser((id, done) => {
    pool.query("SELECT * FROM users WHERE id = $1", [id], (err, results) => {
      if (err) return done(err);
      return done(null, results.rows[0]);
    });
  });
}

module.exports = initialize;
