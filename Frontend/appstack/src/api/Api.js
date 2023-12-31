import axios from "axios";
import stogare from "../Stogare/Stogare";

const axiosClient = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  //timeout: 5000, // default is `0` (no timeout)
  // responseType: "json",
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  const token = stogare.getToken();
  if (token !== null && token !== undefined) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data !== undefined) {
      // only get data
      return response.data;
    }

    return response;
  },
  (error) => {
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      throw error.request;
    } else {
      throw error;
    }
    // Handle errors
  }
);

export default axiosClient;
