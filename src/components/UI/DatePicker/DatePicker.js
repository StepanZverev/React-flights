import React, { forwardRef } from 'react';
import { formatDateForDatePicker } from '../../../utils/formatDate';
import DatePicker from "react-datepicker"

import classes from './DatePicker.module.scss';

const CustomDatePicker = (props) => {
    const CustomInput = forwardRef(
        ({ value, onClick }, ref) => (
            <button className={classes.DatePicker} onClick={onClick} ref={ref}>
                <div className={classes.value}>
                    {formatDateForDatePicker(new Date(value))}
                </div>
                <img className={classes.img} src="/calendar.svg" alt="calendar" />
            </button>
        ),
    );
    return (
        <DatePicker
            selected={props.value}
            onChange={date => props.onChange(date)}
            customInput={<CustomInput/>}
            minDate={new Date()}
        />
    )
}

export default CustomDatePicker