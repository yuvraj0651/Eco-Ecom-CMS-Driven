import axios from "axios";

export const api = axios.create({
  baseURL: "https://eco-ecom-cms-driven.onrender.com/api",
});

// Fetch all header data
export const getHeaderData = async () => {
  try {
    const response = await api.get("/header");
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch header data");
  }
};
