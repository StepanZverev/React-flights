import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';


const Logout = () => {
    const dispatch = useDispatch();
    dispatch({ type: "LOGOUT" })
    return (
        <Redirect to="/login" />
    )
}

export default Logout;