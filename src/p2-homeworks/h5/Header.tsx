import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.navMenu}>
            <div>
                <NavLink className={s.navItem} to={PATH.PRE_JUNIOR}> PRE_JUNIOR </NavLink>
            </div>
            <div>
                <NavLink className={s.navItem} to={PATH.JUNIO}> JUNIO </NavLink>
            </div>
            <div>
                <NavLink className={s.navItem} to={PATH.JUNIOR_PLUS}> JUNIOR_PLUS </NavLink>
            </div>
        </div>
    );
}

export default Header;
