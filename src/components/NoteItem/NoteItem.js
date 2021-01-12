import classes from './NoteItem.module.scss';

const NoteItem = props => {
    return (
        <div className={classes.NoteItem}>
            <textarea disabled="disabled" value={props.text} />
        </div>
    )
}

export default NoteItem
