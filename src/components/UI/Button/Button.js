import classes from './Button.module.scss'
import React from 'react'


const Button = ({ input, meta, ...props }) => {
    return (
        <button className={classes.Button} {...input} {...props} >
            {props.children}
        </button>
    )
}


export default Button