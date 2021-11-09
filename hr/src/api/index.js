import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchPosts = (formData) => API.post('/leave/',formData);
export const createPost = (formData) => API.post('/apply/',formData);

export const fetchHodPost = (formData) => API.post('/approve/',formData);
export const approvePost  = (formData) => API.post('/put/',formData);

export const fetchhr = (formData) => API.post('/hr',formData);

export const signIn = (formData) => API.post('/user/signin', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);
