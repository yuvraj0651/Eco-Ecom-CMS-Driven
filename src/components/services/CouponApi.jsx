import axios from "axios";

export const api = axios.create({
  baseURL: "https://eco-ecom-cms-driven.onrender.com/api",
});

export const getCouponsData = async () => {
  try {
    const response = await api.get("/coupons");
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("Failed to fetch coupons data");
  }
};
