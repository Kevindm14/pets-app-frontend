import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_PETS_APP_URL_BASE
});

export default axiosClient;