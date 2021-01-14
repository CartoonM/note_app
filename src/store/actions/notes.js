import axiosNoteApi from '../../axios/axiosNoteApi';
import {SAVE_NOTEs} from './actionTypes';

export function addNote(note) {
    return async (dispatch, getState) => {
        try {
            await axiosNoteApi.post(
                '/notes/create/',
                {note: note},
                {headers: {'auth-token': getState().auth.get('token')}}
            );
            dispatch(fetchNotes());
        } catch (err) {
            console.log(err)
        }
    }
}

export function fetchNotes() {

    return async (dispatch, getState) => {
        try {
            const response = await axiosNoteApi.get(
                '/notes/list/',
                {headers: {'auth-token': getState().auth.get('token')}}
                )
            dispatch(saveNotes(response.data));
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveNotes(notes) {
    return {
        type: SAVE_NOTEs,
        notes
    }
}
