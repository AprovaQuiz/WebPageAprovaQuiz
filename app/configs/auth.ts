import axios from "axios";

export const axiosAprovaApi = axios.create({
    baseURL: "https://aprovaquiz-rest-api-production.up.railway.app"
});

axiosAprovaApi.interceptors.request.use(
    config => {
        config.headers['Authorization'] = localStorage.getItem("access-token") || "";
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

axiosAprovaApi.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status == 403) {
            return window.location.assign("/login");
        } else {
            return Promise.reject(error);
        }
    }
);