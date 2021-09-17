import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div className={s.number_error}>404</div>
            <div className={s.text_error}>Page not found!</div>
            <div className={s.img}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
