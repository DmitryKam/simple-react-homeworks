import {AppStoreType} from './store';

const LOADING = 'LOADING'


export type InitStateType = {
    loadingInReducer: boolean
}

const initState: InitStateType = {
    loadingInReducer: false
};

type LoadingType = {
    type: 'LOADING'
    loadingInReducer: boolean

}

type ActionType = LoadingType;

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            console.log(action.loadingInReducer)
            return {
                ...state,
                loadingInReducer: action.loadingInReducer
            }
        }
        default:
            return state;
    }
};

export const loadingAC = (loadingInReducer: boolean): LoadingType => {
    return {type: LOADING, loadingInReducer}

}; // fix any