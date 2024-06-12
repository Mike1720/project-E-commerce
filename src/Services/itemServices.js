import axios from "axios";

const BASE_URL = `https://e-commerce-project-uivk.onrender.com`

export const getAllItems = () => axios.get(`${BASE_URL}/items`);

export const getOneItems = (id) => axios.get(`${BASE_URL}/items/${id}`);

export const createItem = (data, jwToken) => axios.post(`${BASE_URL}/items`, data, {
  headers: {
    Authorization: `Bearer ${jwToken}`
  }
});