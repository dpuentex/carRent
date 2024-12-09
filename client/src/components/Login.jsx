// Login.jsx (Frontend)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    // Validation
    const validationErrors = [];
    if (!formData.username || !formData.password) {
      validationErrors.push("Please fill all fields");
    }
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Send POST request to backend for login
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: formData.username,
        password: formData.password,
      }),
      credentials: "include", // Ensures cookies are sent (for sessions)
    })
      .then((res) => {
        if (res.ok) {
          navigate("/dashboard"); // Redirect to dashboard on successful login
        } else {
          return res.json().then((data) => {
            setErrors([data.message || "Login failed. Please try again."]);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrors([error.message]);
      });
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errors.length > 0 && (
          <div className="error-messages">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <button className="loginBtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
