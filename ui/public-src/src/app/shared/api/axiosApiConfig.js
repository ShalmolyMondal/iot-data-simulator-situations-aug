import axios from "axios";
import DeviceEntry from 'models/device/DeviceEntry';

const api = axios.create({
    baseURL: 'http://localhost:8080/api_v2/'
});

export default api;