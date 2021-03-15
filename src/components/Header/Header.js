import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.Header}>
            <Link className={classes.logout} to="/logout">
                <span>
                    Выйти
                </span>
                <img src="/logout.svg" alt="logout" />
            </Link>
        </header>
    )
}


export default Header