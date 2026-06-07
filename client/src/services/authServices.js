import api from "./axios.js";

// register
const register = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

// login
const login = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export { register, login };
