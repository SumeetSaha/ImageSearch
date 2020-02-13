import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers: {
        Authorization: 'Client-ID 1c50605020b2cf40dcdfc82219bfaab14bf2fcac5551cc0c31882f1140ad9d63' 
    }
});