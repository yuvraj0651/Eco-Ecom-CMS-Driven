import axios from "axios";

export const api = axios.create({
  baseURL: "https://eco-ecom-cms-driven.onrender.com/api",
});

// fetch All Home Page Data
export const getHomeData = async () => {
  try {
    const response = await api.get("/homepage");
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch home page data");
  }
};
