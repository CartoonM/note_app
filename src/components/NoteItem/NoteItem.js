import {useEffect, useState} from 'react';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import classes from './NoteItem.module.scss';

const NoteItem = props => {

    const defaultCls = [classes.NoteItem];

    if (props.setDelay) {
        defaultCls.push(classes.hide);
    }

    const [cls, setCls] = useState(defaultCls);

    useEffect(() => {
        if (cls.length > 1) {
            setTimeout(() => setCls([classes.NoteItem]), 250);
        }
    }, [])

    return (
        <ScrollIntoViewIfNeeded
          elementType="div"
          className={cls.join(' ')}
        >
            <textarea disabled="disabled" value={props.text} />
        </ScrollIntoViewIfNeeded>
    )
}

export default NoteItem
