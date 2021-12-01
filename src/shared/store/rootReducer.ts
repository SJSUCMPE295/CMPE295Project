import { combineReducers } from 'redux';
import app from './app/reducer';
import userProfileReducer from './userProfileReducer';
import loginReducer from './loginReducer';

const createRootReducer = () =>
    combineReducers({
        app,
        userProfileReducer,
        loginReducer,
    });

export default createRootReducer;
