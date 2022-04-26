import * as ActionTypes from '../constants/action-types';
import { Action } from './types';

export const initialState = Object.freeze<any>({
    locale: 'en_US',
});

export default (state: any = initialState, action: Action | any): any => {
    switch (action?.type) {
        case 'persist/REHYDRATE': {
            return { ...state, ...action?.payload?.user, ...action?.payload?.userProfileReducer };
        }
        case ActionTypes.SETGETHELP: {
            return { ...state, help: true };
        }
        case ActionTypes.updateUser: {
            return { ...state, ...action?.payload };
        }
        case ActionTypes.SETDOCTORDATA: {
            return { ...state, doctor: action?.payload?.doctor || action?.payload };
        }
        case ActionTypes.saveUserName: {
            return {
                ...state,
                firstName: action?.firstName,
                lastName: action?.lastName,
                userName: action?.userName,
            };
        }
        case ActionTypes.createUserProfile: {
            return {
                ...state,
                id: action?.id,
                userMetaData: action?.userMetaData,
                profile: action?.profile,
                address: action?.address,
            };
        }
        case ActionTypes.loginAction:
            return {
                ...state,
                email: action.email,
            };

        case ActionTypes.logoutAction:
            return {};
        default:
            return state;
    }
};
