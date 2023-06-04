import axios from 'axios';
export default {
    login : (data) => {
        const instance = axios.create({
            baseURL : process.env.baseURL
        });
        const res = instance.post('/apilogin', data);
        console.log(res);
    }
}