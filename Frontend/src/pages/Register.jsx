import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setMsg(null);

    if (!email || !password || !confirm) {
      setErr("Fill all fields.");
      return;
    }
    if (password.length < 6) {
      setErr("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setErr("Passwords do not match.");
      return;
    }

    try {
      const data = await registerUser({ email, password });
      setMsg(data.message || "Registered");
      // optional: auto-redirect to login
      setTimeout(() => nav("/login"), 1000);
    } catch (error) {
      setErr(error?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2 className="header">Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} type="email" />
        <input placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        <input placeholder="Confirm Password" value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" />
        <button type="submit">Register</button>
      </form>
      {err && <p className="error">{err}</p>}
      {msg && <p className="success">{msg}</p>}
    </div>
  );
}
