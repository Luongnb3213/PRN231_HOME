import axios from "axios";
import { requireHeader, urlDev } from "../constant/url";
import Cookies from "js-cookie";


const customAxios = axios.create({
  baseURL: urlDev
});


const exemptedUrls = ["/home"];


customAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token && !exemptedUrls.includes(config.url)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {

      window.location.href = "/authorization";
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
    if (error.code === "ECONNABORTED" && exemptedUrls.includes(url)) {
      console.warn(`Timeout occurred on ${url}, nhưng đã được bỏ qua.`);
      return null;
    } else {
      console.log(error)
    }
  }
};

export default requestAPI;
