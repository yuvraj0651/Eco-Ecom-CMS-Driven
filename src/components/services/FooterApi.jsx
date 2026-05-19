import axios from "axios";

export const api = axios.create({
  baseURL: "https://eco-ecom-cms-driven.onrender.com/api",
});

// fetch All Footer Data
export const getFooterData = async () => {
  try {
    const response = await api.get("/footer");
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch footer data");
  }
};
