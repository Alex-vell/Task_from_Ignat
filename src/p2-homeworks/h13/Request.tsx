import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {createNewPost, setChecked} from "./bll/checkbox-reducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";


type RequestTypeProps = {}

export const Request: React.FC<RequestTypeProps> = () => {
    const checked = useSelector<AppStoreType, boolean>(state => state.check.checked)
    const result = useSelector<AppStoreType, string | null>(state => state.check.result)
    const dispatch = useDispatch()

    const changeCheckboxHandler = (success: boolean) => {
        dispatch(setChecked(success))
    }

    const changeCheckboxCallback = () => {
        checked
            ? dispatch(createNewPost(true))
            : dispatch(createNewPost(false))
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <SuperButton onClick={changeCheckboxCallback} style={{width: '100px'}}>Send</SuperButton>
            <SuperCheckbox onChangeChecked={changeCheckboxHandler} checked={checked}/>
            {result && <div>{result}</div>}
        </div>
    )
}