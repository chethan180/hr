// import { AUTH } from '../constants/actionTypes';
// import * as api from '../api/index.js';

// export const signin = (formData, router) => async (dispatch) => {
//   try {
//     console.log(formData);
//     const data = await api.signIn(formData);
//     console.log(data);
//     dispatch({ type: AUTH,payload: data });

//     router.push('/fac');
//   } catch (error) {
//     alert("invalid!  ");  
//     console.log(error);
//   }
// };

// // export const getPosts = (formData) => async (dispatch) => {

// //   try {
// //     console.log(formData);
// //       const data  = await api.fetchPosts(formData);
// //       console.log(data);
// //       dispatch({ type:FETCH_ALL , payload :data});

// //   }
// //   catch(error){
// //       console.log(error.message);
// //   }
// // }