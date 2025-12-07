import React, { useEffect, useState } from "react";
import { getDashboard, logout } from "../api/authService";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [message, setMessage] = useState("Loading...");
  const nav = useNavigate();

  useEffect(() => {
    let mounted = true;
    getDashboard()
      .then((res) => {
        if (mounted) setMessage(res.message || "Welcome");
      })
      .catch((err) => {
        setMessage("Unauthorized or error");
      });
    return () => (mounted = false);
  }, []);

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <div>
      <h2 className="header">Dashboard</h2>
      <p>{message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
