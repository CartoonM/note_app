import classes from './NoteList.module.scss';
import {useState} from 'react';
import {connect} from 'react-redux';
import NoteItem from '../../components/NoteItem/NoteItem';
import NoteInput from '../../components/NoteInput/NoteInput';
import {addNote} from '../../store/actions/notes';


const NoteList = props => {

    const [textArea, setTextArea] = useState({
        value: '',
        isBlink: false
    })
    const [enableScroll, setEnableScroll] = useState(true)

    const setText = event => {
        const currentState = {...textArea};
        currentState.value = event.target.value;
        setTextArea(currentState);
    }

    const addNote = event => {
        event.preventDefault();
        setEnableScroll(!enableScroll);

        if (!textArea.value.trim()) {
            setTextArea({...textArea, isBlink: true})
            setTimeout(() => setTextArea({...textArea, isBlink: false}), 1000)
            return
        }

        props.addNote(textArea);
        setTextArea({value: ''});
    }

    const noteCount = props.notes.length;
    const notes = props.notes.map((note, index) => {
        return <NoteItem
                  text = {note.value}
                  key = {index}
                  setDelay = {index === noteCount - 1}
                />
    })

    return (
        <>
            <NoteInput
              onChange={setText}
              value={textArea.value}
              onClick={addNote}
              isBlink={textArea.isBlink}
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
