
import axios from "axios";

export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_URL_API,
    headers: {
        "isMobile": true,
        
    },
});

api.interceptors.response.use(
    (response) => {
        if (response.data && typeof response.data === 'object') {
            return response.data;
        }
        return response;
    },
    (error) => {
        if (error.response) {
            const errorMessage = error.response.data?.message || error.response.data?.error || 'Đã xảy ra lỗi';
            return Promise.reject(new Error(errorMessage));
        } else if (error.request) {
            return Promise.reject(new Error('Không thể kết nối đến server'));
        } else {
            return Promise.reject(error);
        }
    }
);
