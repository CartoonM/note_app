import {ADD_NOTE} from '../actions/actionTypes';

const initialState = {
    notes: []
}

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state, notes: [...state.notes, action.note]
            }
        default:
            return state;
    }
}
