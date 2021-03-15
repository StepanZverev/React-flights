import classes from './TextInput.module.scss'
import React from 'react'


const TextInput = ({ input, meta, ...props }) => {

    const hasError = meta.error && meta.touched;
    let cls = [classes.input];

    if (hasError) {
        cls.push(classes.invalid);
    }

    return (
        <div className={classes.TextInput}>
            <label className={classes.label}>{props.label}</label>
            <input className={cls.join(" ")} {...input} {...props} />
            {hasError && <span className={classes.error}>{meta.error}</span>}
        </div>
    )
}


export default TextInput