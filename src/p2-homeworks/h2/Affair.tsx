import React from 'react'
import {AffairType, filterAffairs} from "./HW2";
import s from './Affairs.module.css'

export type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    let priorityClass
    if(props.affair.priority === 'high'){
        priorityClass = s.priorityHigh
    } if(props.affair.priority === 'low'){
        priorityClass = s.priorityLow
    } if (props.affair.priority === 'middle'){
        priorityClass = s.priorityMiddle
    }

    return (
        <div className={s.affair}>
            {/*// show some text*/}
            <div className={s.name}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <button onClick={deleteCallback} className={s.buttonX}>X</button>
        </div>
    )
}

export default Affair
