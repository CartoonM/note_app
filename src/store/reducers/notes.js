import {SAVE_NOTEs} from '../actions/actionTypes';

const initialState = {
    notes: []
}

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTEs:
            return {
                ...state, notes: action.notes
            }
        default:
            return state;
    }
}
