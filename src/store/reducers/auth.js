import {Map} from 'immutable';
import {
    SET_TOKEN,
    FETCH_LOGIN_START,
    FETCH_LOGIN_SUCCESS
} from '../actions/actionTypes';

const initialState = Map({
    token: null,
    loading: false
})

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGIN_SUCCESS:
            return state.set('loading', false)
        case FETCH_LOGIN_START:
            return state.set('loading', true)
        case SET_TOKEN:
            return state.set('token', action.token)
        default:
            return state;
    }
}
