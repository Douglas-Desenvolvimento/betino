import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL do backend
});

export const getSportsData = async () => {
  const response = await api.get("/api/sports-data");
  return response.data;
};
