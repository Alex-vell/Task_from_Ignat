import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loader from './bll/Spinner-3.gif'

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()


    // const loading = false

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        // console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div style={{minHeight: '70px'}}>
                {loading
                    ? (
                        <div><img src={loader}/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
