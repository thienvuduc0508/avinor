import axios, { AxiosInstance } from 'axios';
import { PAGE_SIZE } from '../constants';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://avinor.azure-api.net/public/news',
    headers: {
        'Ocp-Apim-Subscription-Key': '855a06968b9742eebd1dc71c745f5198'
    }
});
export const newsList = (airCode: String, page: Number) => {
    return axiosInstance.get(`/${airCode}/${PAGE_SIZE}/${page}`);
}
export const newsDetail = (id: String) => {
    return axiosInstance.get(`/${id}`);
}
