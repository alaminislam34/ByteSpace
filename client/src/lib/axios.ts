import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const defaultConfig: AxiosRequestConfig = {
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const apiClient: AxiosInstance = axios.create(defaultConfig);

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Inject auth token from localStorage / cookies if available
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle centralized errors (e.g. 401 Unauthorized)
    if (error.response?.status === 401 && typeof window !== "undefined") {
      // Clear token or redirect if needed
      localStorage.removeItem("auth_token");
    }
    return Promise.reject(error);
  }
);
