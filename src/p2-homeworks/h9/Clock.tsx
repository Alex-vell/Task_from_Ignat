import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString()   // 'Time' // fix with date
    const stringDate = date?.toLocaleDateString()   //'Date' // fix with date

    return (
        <div className={s.clock}>
            <div className={s.blockData}>
                <div className={s.stringData}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={s.stringData}>
                        {stringDate}
                    </div>
                )}</div>

            <div className={s.blockButton}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
