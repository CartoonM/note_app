import {SAVE_NOTES} from '../actions/actionTypes';

const initialState = {
    notes: []
}

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTES:
            return {
                ...state, notes: action.notes
            }
        default:
            return state;
    }
}
