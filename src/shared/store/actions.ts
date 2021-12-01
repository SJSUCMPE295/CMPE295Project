import axios from 'axios';

export const ActionTypes = {
    SETGETHELP: 'app/set-get-help',
};
export const setGetHelp = (payload = {}) => ({
    type: ActionTypes.SETGETHELP,
    payload,
});
const jsonToQueryString = (json) => {
    const str = Object.keys(json)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
        .join('&');
    return str ? '?' + str : '';
};
export const getHelp = (data = {}) => axios.get('/api/gethelp' + jsonToQueryString(data));
export const giveHelp = (data = {}) => axios.post('/api/gethelp', data);
export const getHome = (data = {}) => axios.get('/api/listing' + jsonToQueryString(data));
export const signUp = (data = {}) => axios.post('/api/signup', data);
export const login = (data = {}) => axios.post('/api/login', data);
