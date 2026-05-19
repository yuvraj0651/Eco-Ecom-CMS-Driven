import axios from "axios";

export const api = axios.create({
  baseURL: "https://eco-ecom-cms-driven.onrender.com/api",
});

// Fetch All Featured Products
export const getFeaturedProducts = async () => {
  try {
    const response = await api.get("/featuredProducts");
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch featured products");
  }
};
