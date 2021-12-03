    import { FETCH_ALL_HOD } from '../constants/actionTypes';

    export default (hod = [], action) => {
        switch(action.type ){
            case FETCH_ALL_HOD:
                {
                    console.log(action.payload);
                    return action.payload;
                }
            default : 
            {
                return hod;
            }
        }
    }