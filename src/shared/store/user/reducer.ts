import { produce } from 'immer';
import {
    createUserProfile,
    loginAction,
    logoutAction,
    saveUserName,
} from 'store/constants/action-types';
import { ActionTypes } from '../actions';
import { Action } from './types';

export const initialState = Object.freeze<any>({
    locale: 'en_US',
});

export default (state: any = initialState, action: Action | any): any => {
    switch (action?.type) {
        case ActionTypes.SETGETHELP: {
            return { ...state, help: true };
        }
        case 'persist/REHYDRATE': {
            return { ...state, ...action?.payload?.user, ...action?.payload?.userProfileReducer };
        }
        case saveUserName: {
            return {
                ...state,
                firstName: action?.firstName,
                lastName: action?.lastName,
                userName: action?.userName,
            };
        }
        case createUserProfile: {
            return {
                ...state,
                id: action?.id,
                userMetaData: action?.userMetaData,
                profile: action?.profile,
                address: action?.address,
            };
        }
        case loginAction:
            return {
                ...state,
                email: action.email,
            };

        case logoutAction:
            return {};
        default:
            return state;
    }
};
