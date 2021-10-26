export type InitStateType = typeof initState
export type ActionType = loadingActionTypes


const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING/loadingReducer': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}
export type loadingActionTypes = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'LOADING/loadingReducer',
        isLoading
    }
} // fix any