import {Dispatch} from "redux";
import {requestApi} from "../api/request-api";
import {AxiosError} from "axios";

const initState = {
    checked: false,
    success: true,
    result : null as string | null
}

export type InitStateType = typeof initState

export const checkboxReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHECK/CHANGE-CHECKBOX':
            return {...state, success: action.success}
        case "CHECK/SET-ERROR":
            return {...state, result: action.result}
        case "CHECK/SET-CHECKED":
            return {...state, checked: action.checked}

        default: return state;
    }
}

// action
export const changeStatus = (success: boolean) => ({type: 'CHECK/CHANGE-CHECKBOX', success} as const); // fix any
export const setError = (result: string | null) => ({type: 'CHECK/SET-ERROR', result} as const);
export const setChecked = (checked: boolean) => ({type: 'CHECK/SET-CHECKED', checked} as const);

// thunk

export const createNewPost = (success: boolean) => (dispatch: Dispatch) => {
    requestApi.createPost(success)
        .then((res) => {
            dispatch(changeStatus(res.data.yourBody.success))
            dispatch(setError(res.data.errorText))
        })
        .catch((error: AxiosError) => {
            dispatch(setError(error.message))
            console.log({...error})
            console.log(error.response ? error.response.data.errorText : error.message)
        })
}


// types
type ChangeCheckboxActionType = ReturnType<typeof changeStatus>
type SetErrorActionType = ReturnType<typeof setError>
type SetCheckedActionType = ReturnType<typeof setChecked>
type ActionsType = ChangeCheckboxActionType | SetErrorActionType | SetCheckedActionType

