import {  UPDATE } from '../constants/actionTypes';

export default (updt = [], action) => {
    switch(action.type ){
        case UPDATE:
            {
                // console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return updt;
        }
    }
}