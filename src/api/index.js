import axios from "axios";

const API = axios.create({
  baseURL: "https://685013d7e7c42cfd17974a33.mockapi.io",
});

export const getCustomers = () => API.get("/taxes");
export const getCountries = () => API.get("/countries");
export const updateCustomer = (id, data) =>
  API.put(`/taxes/${id}`, data);
