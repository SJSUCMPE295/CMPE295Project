import { combineReducers } from 'redux';
import user from './user/reducer';
//import app from './app/reducer';
import userProfileReducer from './reducers/userProfileReducer';
import loginReducer from './reducers/loginReducer';

const appReducer = 
    combineReducers({
        user,
        //app,
        userProfileReducer,
        loginReducer,
    });

export default appReducer;