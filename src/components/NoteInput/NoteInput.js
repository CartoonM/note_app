import classes from './NoteInput.module.scss';

const NoteInput = props => {

    return (
        <div className={classes.NoteInput}>
            <form>
                <textarea onChange={props.onChange} value={props.value}/>
                <button onClick={props.onClick}>
                    <span>U</span>
                </button>
            </form>
        </div>
    )
}

export default NoteInput
