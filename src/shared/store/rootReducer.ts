import { combineReducers } from 'redux';
import user from './user/reducer';
//import app from './app/reducer';
import userProfileReducer from './userProfileReducer';
import loginReducer from './loginReducer';

const createRootReducer = () =>
    combineReducers({
        user,
        //app,
        userProfileReducer,
        loginReducer,
    });

export default createRootReducer;
