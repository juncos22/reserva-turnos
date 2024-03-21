import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-turnos.vercel.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
})
