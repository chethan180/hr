import { FETCH_BALANCE } from '../constants/actionTypes';

export default (balance = [], action) => {
    switch(action.type ){
        case FETCH_BALANCE:
            {
                console.log(action.payload);
                return action.payload;
            }
        default : 
        {
            return balance;
        }
    }
}