import React from 'react'
import s from './Message.module.css'

type typePropsMessageData = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: typePropsMessageData) => {
    return (
        <div className={s.post}>
            <div className={s.container}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <img className={s.avatar} src={props.avatar}/>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
