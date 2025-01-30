import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.225.26:3131", // URL do backend
});

export const getSportsData = async () => {
  const response = await api.get("/api/sports");
  return response.data;
};
