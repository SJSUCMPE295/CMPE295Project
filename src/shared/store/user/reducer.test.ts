import * as ActionTypes from '../constants/action-types';
import reducer, { initialState } from './reducer';

describe('App Reducer', () => {
    it('sets the locale', () => {
        expect(reducer(initialState, { type: ActionTypes.SETLOCALE, payload: 'de_DE' })).toEqual({
            locale: 'en_US',
        });
    });
});
