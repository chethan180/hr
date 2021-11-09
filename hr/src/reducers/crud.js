import { FETCH_ALL,CREATE ,FETCH_ALL_HOD , UPDATE, FETCH_ALL_HR} from '../constants/actionTypes';

export default (crud = [], action) => {
    switch(action.type ){
        case FETCH_ALL:
            {
                // console.log(action.payload);
                // return {...crud ,data: action.payload};
                return action.payload;
            }
        case CREATE:
            return action.payload;
        case FETCH_ALL_HOD:
            return action.payload;
        case FETCH_ALL_HR:
            return action.payload;
        case UPDATE:
            return action.payload;
        default :
            return crud;
    }
}