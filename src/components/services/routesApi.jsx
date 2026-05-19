import axios from "axios";

export const api = axios.create({
  baseURL: "https://eco-ecom-cms-driven.onrender.com/api",
});

// Fetch All Routes
export const getRoutes = async () => {
  try {
    const response = await api.get("/routes");
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch all routes");
  }
};

// https://eco-ecom-cms-driven.onrender.com/api/cms-routes