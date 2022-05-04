import axios from 'axios';
import * as ActionTypes from './constants/action-types';
import { Locale } from './user/types';
const api = axios.create({
    withCredentials: true,
});
api.interceptors.request.use((config) => {
    config.headers.authtoken =
        (typeof window !== 'undefined' && window.localStorage.getItem('token')) || null;
    return config;
});
export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SETLOCALE,
    payload: locale,
});
export const setGetHelp = (payload = {}) => ({
    type: ActionTypes.SETGETHELP,
    payload,
});
export const updateUserProfile = (payload) => ({
    type: ActionTypes.updateUser,
    payload: payload?.data?.data || payload?.data || payload || {},
});
export const updateUserProfileDoctorData = (payload = {}) => ({
    type: ActionTypes.SETDOCTORDATA,
    payload,
});
const jsonToQueryString = (json = {}) => {
    const str = Object.keys(json)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(json[key]))
        .join('&');
    return str ? '?' + str : '';
};

/* api */
export const signUp = (data = {}) => api.post('/api/signup', data);
export const loginApi = (data = {}) => api.post('/api/login', data);
export const getHome = (data = {}) => api.get('/api/listing' + jsonToQueryString(data));

export const getAllDoctorsAppointments = (id, data = {}) =>
    api.get(`/api/appointments/doctors/${id}${jsonToQueryString(data)}`);
export const getAvailableDoctors = (data = {}) =>
    api.get('/api/appointments/doctors' + jsonToQueryString(data));
export const setDoctorsAvailability = (data) =>
    api.post(`/api/appointments/doctors/${data?.userId || data?.id}`, data);
export const setAppointment = (id, data) => api.put(`/api/appointments/${id}`, data);
export const createAppointment = (data) => api.post('/api/appointments', data);
export const getHelp = (data = {}) => api.get('/api/gethelp' + jsonToQueryString(data));
export const giveHelp = (data = {}) => api.post('/api/gethelp', data);
export const getServiceById = (id, data = {}) =>
    api.get(`/api/gethelp/services/${id}${jsonToQueryString(data)}`);
export const getResourcesById = (id, data = {}) =>
    api.get(`/api/gethelp/resources/${id}${jsonToQueryString(data)}`);
export const getProfile = (data) =>
    api.get(`/api/user/${data?.userId || data?.id}${jsonToQueryString(data)}`);
export const profileUpdate = (data = {}) => api.put('/api/user', data);
/* Thunk Actions */
export const getProfileData = (data = {}) => {
    return (dispatch) => {
        getProfile(data).then((r) => {
            dispatch(updateUserProfile(r));
        });
    };
};
