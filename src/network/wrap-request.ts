import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
    timeout: 3000,
});

export const request = (options: AxiosRequestConfig): Promise<any> => {
    return instance.request(options).then(res => res.data);
};