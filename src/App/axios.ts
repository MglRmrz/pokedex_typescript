import axios from 'axios';

// Aquí va la url para que no se esté repitiendo en cada petición
const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// Interceptor para las request
axiosInstance.interceptors.request.use(async request => {
  try {
    // console.log(request);
    return Promise.resolve(request);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
});

// Interceptor para las respuestas del servidor
axios.interceptors.response.use(async response => {
  try {
    // console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
});

export default axiosInstance;
