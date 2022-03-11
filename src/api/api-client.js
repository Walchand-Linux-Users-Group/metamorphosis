import axios from "axios";
import { apiBaseUrl } from "./apis";
import axiosRetry from "axios-retry";

const apiInstance = () => {
  const api = axios.create({
    baseURL: apiBaseUrl,
  });
  axiosRetry(api, { retries: 1 });
  return api;
};

const apiClient = apiInstance();
export default apiClient;
