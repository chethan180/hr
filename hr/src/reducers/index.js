import { combineReducers } from 'redux';

import crud from './crud';
import auth from './auth';
import leav from './leav';
import hod from './hod';
import updt from './updt';
import balance from './balance';
import aleav from './aleav'

export const reducers = combineReducers({ crud, auth ,leav,hod,updt,aleav, balance});
