const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { pool } = require("./dbConfig");

function initialize(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        const query = "SELECT * FROM users WHERE email = $1";
        const { rows } = await pool.query(query, [email]);

        if (rows.length === 0) {
          return done(null, false, {
            message: "No user found with that email.",
          });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { message: "Incorrect password." });
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    done(null, rows[0]);
  });
}

module.exports = initialize;
