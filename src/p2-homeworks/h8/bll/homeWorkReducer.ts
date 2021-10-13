import {UserType} from "../HW8";

export type InitialStateType = UserType

export type SortUpActionType = {
    type: 'sortUp'
    payload: 'up'
}
export type SortDownActionType = {
    type: 'sortDown'
    payload: 'down'
}
export type CheckActionType = {
    type: 'check'
    payload: number
}

export type ActionType = SortUpActionType | SortDownActionType | CheckActionType

export const homeWorkReducer = (state: InitialStateType, action: ActionType): InitialStateType => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            // need to fix
            let newState = [...state].sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    else return 0
                }
            )
            return newState
        }
        case 'sortDown': {
            // need to fix
            let newState = [...state].sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    else return 0
                }
            )
            return newState
        }
        case 'check': {
            // need to fix
            let newState = [...state].filter(f => f.age >= action.payload)

            return newState
        }
        default:
            return state
    }
}


