import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/authenticated");
        if (response.data.authenticated) {
          setUser(response.data.user);
        } else {
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        navigate("/login"); // In case of error, redirect to login
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div>
      {user ? (
        <h1>
          Welcome, {user.first_name} {user.last_name}
        </h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
