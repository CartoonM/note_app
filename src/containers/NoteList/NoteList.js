import classes from './NoteList.module.scss';
import {useState} from 'react';
import {connect} from 'react-redux';
import NoteItem from '../../components/NoteItem/NoteItem';
import NoteInput from '../../components/NoteInput/NoteInput';
import {addNote} from '../../store/actions/notes';


const NoteList = props => {

    const [textArea, setTextArea] = useState({
        value: ''
    })

    const setText = event => {
        const currentState = {...textArea};
        currentState.value = event.target.value;
        setTextArea(currentState);
    }

    const addNote = event => {
        event.preventDefault();

        props.addNote(textArea);
        setTextArea({value: ''})
    }

    console.log(props)
    const notes = props.notes.map((note, index) => {
        return <NoteItem text={note.value} key={index} />
    })

    return (
        <>
            <NoteInput
              onChange={setText}
              value={textArea.value}
              onClick={addNote}
            />
            <div className={classes.NoteList}>
                {/* <NoteItem text={textArea.value} /> */}
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
