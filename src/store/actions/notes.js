import {ADD_NOTE} from './actionTypes';

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    }
}
