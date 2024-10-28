import axios from "axios";
import { requireHeader, urlDev } from "../constant/url";
import Cookies from "js-cookie";

const customAxios = axios.create({
  baseURL: urlDev,
  timeout: 10000,
});

customAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    // console.log(token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized - Token có thể đã hết hạn!");
    }
    return Promise.reject(error);
  }
);
const requestAPI = async (method, url, data = null) => {
  const headers = {
    "X-Header-Required": requireHeader,
    "Content-Type": "application/json",
  };
  try {
    const response = await customAxios({
      method: method,
      url: url,
      data: data,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi call API:", error.message);
    throw error;
  }
};

export default requestAPI;
