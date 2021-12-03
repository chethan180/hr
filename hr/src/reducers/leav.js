import { FETCH_ALL } from '../constants/actionTypes';

export default (leav = [], action) => {
    switch(action.type ){
        case FETCH_ALL:
            {
                // console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return leav;
        }
    }
}