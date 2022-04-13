import { saveUserName, createUserProfile } from '../constants/action-types';

const defaultState = {};

const userProfileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "persist/REHYDRATE": {
            return {...state, ...action?.payload?.userProfileReducer};
        }
        case saveUserName: {
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
            };
        }
        case createUserProfile: {
            return {
                ...state,
                id: action.id,
                userMetaData: action.userMetaData,
                profile: action.profile,
                address: action.address
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default userProfileReducer;
