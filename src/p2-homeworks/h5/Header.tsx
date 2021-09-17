import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.nav}>

            <span className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>Pre-junior </NavLink>
            </span>
            <span className={s.item}>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior </NavLink>
            </span>
            <span className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior+ </NavLink>
            </span>
            <div className={s.level}>{'Level >'}</div>

        </div>
    )
}

export default Header
