import { combineReducers } from 'redux';
import user from './user/reducer';

const appReducer = combineReducers({
    userProfileReducer: user,
});

export default appReducer;
