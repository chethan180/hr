import { FETCH_ALL_LEAVE } from '../constants/actionTypes';

export default (aleav = [], action) => {
    switch(action.type ){
        case FETCH_ALL_LEAVE:
            {
                // console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        default : 
        {
            return aleav;
        }
    }
}