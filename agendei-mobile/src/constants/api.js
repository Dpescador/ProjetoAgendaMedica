import axios from "axios";

const api = axios.create({
    baseURL: "192.168.56.1:3001"  //"http://192.168.1.10:3001"
});

export default api;