import classes from './NoteList.module.scss';
import {useState} from 'react';
import {connect} from 'react-redux';
import NoteItem from '../../components/NoteItem/NoteItem';
import NoteInput from '../../components/NoteInput/NoteInput';
import {addNote} from '../../store/actions/notes';


const NoteList = props => {

    const [noteInCreate, setNoteInCreate] = useState({
        title: '',
        body: ''
    })
    const [isBlink, setBlink] = useState(false)

    const setText = event => {
        const currentState = {...noteInCreate};
        currentState.body = event.target.value;
        setNoteInCreate(currentState);
    }

    const addNote = event => {
        event.preventDefault();

        if (!noteInCreate.body.trim()) {
            setBlink(true);
            setTimeout(() => setBlink(false), 1000);
            return
        }

        props.addNote(noteInCreate);
        setNoteInCreate({title: '', body: ''});
    }

    const noteCount = props.notes.length;
    const notes = props.notes.map((note, index) => {
        return <NoteItem
                  text = {note.body}
                  key = {note.id}
                  setDelay = {index === noteCount - 1}
                />
    })

    return (
        <>
            <NoteInput
              onChange={setText}
              value={noteInCreate.body}
              onClick={addNote}
              isBlink={isBlink}
            />
            <div className={classes.NoteList}>
                {notes}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        notes: state.notes.notes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNote: (note) => dispatch(addNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
