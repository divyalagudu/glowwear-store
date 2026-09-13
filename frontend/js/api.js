// GlowWear API client: use the same origin so localhost:5050 works correctly.
const API = "/api";
const token = () => localStorage.getItem("gw_token");

async function api(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (token()) headers.Authorization = "Bearer " + token();

  const res = await fetch(API + path, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
  return data;
}

function user() {
  try {
    return JSON.parse(localStorage.getItem("gw_user") || "null");
  } catch {
    return null;
  }
}

function logout() {
  localStorage.removeItem("gw_token");
  localStorage.removeItem("gw_user");
  location.href = "index.html";
}
