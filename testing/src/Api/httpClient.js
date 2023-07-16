import axios from "axios";
import stogare from "../Stogare/Stogare";

const httpClient = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  responseType: "json",
});
// Add a request interceptor
httpClient.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    // const token = localStorage.getItem("token")
    //   ? JSON.parse(localStorage.getItem("token"))
    //   : null;
    // if (token) {
    //   request.headers["Authorization"] = "Bearer" + token;
    // }
    const token = stogare.getToken();
    if (token !== null && token !== undefined) {
      request.headers.Authorization = token;
    }
    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default httpClient;
