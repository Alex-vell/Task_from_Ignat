const initState = {
    theme: 'some' as ThemeType,
    themes: ['dark', 'red', 'some', 'blue', 'violet'] as ThemesType
}

export type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'THEME/CHANGE-THEME':
            return {...state, theme: action.theme}
        default: return state;
    }
}

// action
export const changeThemeC = (theme: ThemeType) => ({type: 'THEME/CHANGE-THEME', theme} as const); // fix any

// types
type ChangeThemeActionType = ReturnType<typeof changeThemeC>
type ActionsType = ChangeThemeActionType

export type ThemeType = 'dark' | 'red' | 'some' | 'blue' | 'violet'
export type ThemesType = ['dark', 'red', 'some', 'blue', 'violet']