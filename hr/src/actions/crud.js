import { FETCH_ALL, CREATE ,FETCH_ALL_HOD ,FETCH_ALL_HR ,UPDATE} from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = (formData) => async (dispatch) => {

    try {
      console.log(formData);
        const data  = await api.fetchPosts(formData);
        console.log(data);
        dispatch({ type:FETCH_ALL , payload :data});

    }
    catch(error){
        console.log(error.message);
    }
}

export const getHrPosts = (formData) => async (dispatch) => {

  try {
    console.log(formData);
      const data  = await api.fetchhr(formData);
      console.log(data);
      dispatch({ type:FETCH_ALL_HR , payload :data});

  }
  catch(error){
      console.log(error.message);
  }
}

export const apply = (formData) => async (dispatch) => {
    try {
        console.log(formData);
      const data1  = await api.createPost(formData);
  
      dispatch({ type: CREATE, payload: data1 });
    } catch (error) {
      console.log(error);
    }
  };

  export const getHodPosts = (formData) => async (dispatch) => {
    try {
        console.log(formData);
      const data2 = await api.fetchHodPost(formData);
      console.log(data2);
  
      dispatch({ type: FETCH_ALL_HOD, payload: data2 });
    } catch (error) {
      console.log(error);
    }
  };

  export const approve = (formData,router) => async (dispatch) => {
    try {
        console.log(formData);
      const data3  = await api.approvePost(formData);
  
      dispatch({ type: UPDATE, payload: data3 });
      // router.push('/hod/mix');
    } catch (error) {
      console.log(error);
    }
  };