import axios from axios;

const api = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL || "https://localhost:5001",
});


api.interceptors.request.use((config) =>
{
   const token = localStorage.getItem(token);
   if (token) config.header.Authrization = `Bearer ${token}`;
   return config;

})

export default api;