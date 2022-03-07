import { loginAction, logoutAction } from '../constants/action-types';

const initialState = {};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginAction:
            return {
                email: action.email,
            };

        case logoutAction:
            return {};
        default:
            return state;
    }
};

export default loginReducer;
