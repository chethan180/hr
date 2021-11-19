import { FETCH_ALL,CREATE ,FETCH_ALL_HOD , UPDATE,LOGOUT,AUTH, FETCH_ALL_HR} from '../constants/actionTypes';

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
        // case AUTH:
        //     {
        //         console.log(action.payload);
        //         localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

        //         return { ...crud, authData: action.data, loading: false, errors: null };
        //     }
        // case LOGOUT:
        // {
        //     localStorage.clear();

        //     return { ...crud, authData: null, loading: false, errors: null };
        // }
        default :
            return crud;
    }
}