import axiosNoteApi from '../../axios/axiosNoteApi';
import {
    SET_TOKEN,
    FETCH_LOGIN_START,
    FETCH_LOGIN_SUCCESS
} from './actionTypes';

export function signIn(credentials) {
    return async dispatch => {
        dispatch(fetchLoginStart());
        const requestBody = {user: credentials};
        try {
            const response = await axiosNoteApi.post('/auth/login/', requestBody);
            const token = response.headers['auth-token'];

            localStorage.setItem('token', token);
            dispatch(autoSuccess(token));
            dispatch(fetchLoginSuccess());
        } catch (err) {
            console.log(err)
        }
    }
}

function fetchLoginStart() {
    return {
        type: FETCH_LOGIN_START
    }
}

function fetchLoginSuccess() {
    return {
        type: FETCH_LOGIN_SUCCESS
    }
}

function autoSuccess(token) {
    return {
        type: SET_TOKEN,
        token
    }
}
