import { produce } from 'immer';
import { ActionTypes } from '../actions';
import { Action } from './types';

export const initialState = Object.freeze<any>({
    locale: 'en_US',
});

export default (state: any = initialState, action: Action): any => {
    switch (action?.type) {
        case ActionTypes.SETGETHELP: {
            return { ...state, help: true };
        }
        default:
            return state;
    }
};
