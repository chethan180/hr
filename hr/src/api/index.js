import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.43.161:5000' });


export const fetchPosts = (formData) => API.post('/leave/',formData);
export const createPost = (formData) => API.post('/apply/',formData);
export const fetchleaves = (formData) => API.post('/aleave/',formData);

export const fetchHodPost = (formData) => API.post('/approve/',formData);
export const approvePost  = (formData) => API.post('/put/',formData);

export const fetchhr = (formData) => API.post('/hr/',formData);
export const fetchbalance = (formData) => API.post('/balance/',formData);


export const signIn = (formData) => API.post('/auth/', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);
