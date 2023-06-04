import axios from "axios";
import { useAuthStore } from "./src/stores/authStore";
const authStore = useAuthStore();

const instance = axios.create({
    baseURL : process.env.baseURL,
    timeout: 1000
});

instance.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${authStore.accessToken}`;
    return config;
});

instance.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, async (err) => {
    const config = err.config;
    if(err.response.status == 401 && !config.tryRefresh){
        config.tryRefresh = true;
        const accessToken = await verifyRefresh();
        authStore.accessToken = accessToken;
        return instance(config);
    }
    return Promise.reject(err);
});

async function verifyRefresh() {
    const client = axios.create({
        baseURL : process.env.baseURL,
        timeout: 1000
    });
    const res = await client.get('/login/verifyRefresh');
    return res.accessToken;
}