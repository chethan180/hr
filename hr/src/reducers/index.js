import { combineReducers } from 'redux';

import crud from './crud';
import auth from './auth';

export const reducers = combineReducers({ crud, auth });
