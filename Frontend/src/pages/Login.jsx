import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, saveToken } from "../api/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    if (!email || !password) {
      setErr("Provide email and password.");
      return;
    }
    try {
      const data = await loginUser({ email, password });
      if (data.token) {
        saveToken(data.token);
        nav("/dashboard");
      } else {
        setErr(data.message || "Login failed");
      }
    } catch (error) {
      setErr(error?.response?.data?.message || "Login error");
    }
  };

  return (
    <div>
      <h2 className="header">Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" />
        <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        <button type="submit">Login</button>
      </form>
      {err && <p className="error">{err}</p>}
      <p className="small"> register first if you don't have an account.</p>
    </div>
  );
}
