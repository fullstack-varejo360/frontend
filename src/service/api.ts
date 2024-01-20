import axios from "axios";

export const api = axios.create({
    baseURL: "https://varejodb.onrender.com",
    timeout: 6000
})