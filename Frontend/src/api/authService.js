import api from "./api";

const PREFIX = "/api/auth";

export async function registerUser({ email, password }) {
  const resp = await api.post(`${PREFIX}/register`, { email, password });
  return resp.data;
}

export async function loginUser({ email, password }) {
  const resp = await api.post(`${PREFIX}/login`, { email, password });
  return resp.data;
}

export async function getDashboard() {
  const resp = await api.get(`${PREFIX}/dashboard`);
  return resp.data;
}

export function saveToken(token) {
  if (token) {
    localStorage.setItem("token", token);
  }
}

export function logout() {
  localStorage.removeItem("token");
}
