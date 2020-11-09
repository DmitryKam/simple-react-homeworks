
const THEME = 'THEME';


type ChangeThemeActionType = {
    type:'THEME'
    theme: string

}

type ThemeType = 'dark'| 'red'| 'some'
type ActionType = ChangeThemeActionType

export type ThemeInitialStateType = {
    themes: string[],
    theme: string,
}

const initState: ThemeInitialStateType = {
    themes: ['dark', 'red', 'some'],
    theme: 'some',
};

export const themeReducer = (state: ThemeInitialStateType = initState, action: ActionType): ThemeInitialStateType => {
    switch (action.type) {
        case 'THEME': {
                return {
                    ...state,
                    theme: action.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme:string): ActionType => {
    return {type: 'THEME', theme}
};