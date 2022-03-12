import axios from 'axios';
const api = axios.create({
    //    withCredentials: true,
});
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
export const getHelp = (data = {}) => api.get('/api/gethelp' + jsonToQueryString(data));
export const getAllDoctorsAppointments = (id, data = {}) =>
    api.get(`/api/appointments/doctors/${id}${jsonToQueryString(data)}`);
export const getAvailableDoctors = (data = {}) =>
    api.get('/api/appointments/doctors' + jsonToQueryString(data));
export const giveHelp = (data = {}) => api.post('/api/gethelp', data);
export const getHome = (data = {}) => api.get('/api/listing' + jsonToQueryString(data));
export const signUp = (data = {}) => api.post('/api/signup', data);
export const login = (data = {}) => api.post('/api/login', data);
export const getServiceById = (id, data = {}) =>
    api.get(`/api/gethelp/services/${id}${jsonToQueryString(data)}`);
export const getResourcesById = (id, data = {}) =>
    api.get(`/api/gethelp/resources/${id}${jsonToQueryString(data)}`);
