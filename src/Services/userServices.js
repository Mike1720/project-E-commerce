import axios from "axios";

const BASE_URL = `https://e-commerce-project-uivk.onrender.com`

export const registerUserService = data => axios.post(`${BASE_URL}/register`, data);

export const loginUserService = data => axios.post(`${BASE_URL}/login`, data);

export const getUserService = (jwtToken) => axios.get(`${BASE_URL}/users/me`, { headers: { Authorization: `Bearer ${jwtToken}` } })