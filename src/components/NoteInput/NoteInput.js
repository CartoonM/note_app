import classes from './NoteInput.module.scss';

const NoteInput = props => {

    let btnCls = null;

    if (props.isBlink) {
        btnCls = classes.error;
    }

    return (
        <div className={classes.NoteInput}>
            <form>
                <textarea onChange={props.onChange} value={props.value}/>
                <button onClick={props.onClick} className={btnCls}>
                    <div>U</div>
                </button>
            </form>
        </div>
    )
}

export default NoteInput
