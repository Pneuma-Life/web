import React from 'react';
import { BrowserRouter, Navigate } from "react-router-dom";
import {AppRoutes} from './Routes';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";


axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    // @ts-ignore
    config.headers.Authorization =  authObj.token;

    return config;
}, (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    // Edit response config
    return response;
}, (error: AxiosError): Promise<AxiosError> => {
    if (error.response?.status === 500) {
        // Navigate('/server-down')
    }
    return Promise.reject(error);
});


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="apps--main">
            <AppRoutes />
        </div>
    </BrowserRouter>
  );
}

export default App;
