import { saveUserName, createUserProfile } from '../constants/action-types';

const defaultState = {};

const userProfileReducer = (state = defaultState, action) => {
    console.log("inside user profile reducer", action);
    switch (action.type) {
        case saveUserName: {
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
                //   return Object.assign(state, action.payload);
            };
        }
        case createUserProfile: {
            console.log("inside createuserprofile");
            return {
                ...state,
                isDoctor: action.isDoctor,
                address1: action.address1,
                address2: action.address2,
                city: action.city,
                state: action.state,
                zipCode: action.zipCode,
                phoneNumber: action.phoneNumber,
                gender: action.gender,
                //   return Object.assign(state, action.payload);
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default userProfileReducer;
