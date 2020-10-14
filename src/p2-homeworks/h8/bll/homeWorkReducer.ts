import {PeopleType} from '../HW8';

type SortUpActionType = {
    type: 'sort'
    payload: string
}
type SortDownActionType = {
    type: 'sort'
    payload: string
}
type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionType = SortUpActionType | SortDownActionType | CheckActionType;


export const homeWorkReducer = (state: Array<PeopleType>, action: ActionType): Array<PeopleType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                let stateUpSort =  state.sort(function (obj1, obj2) {
                    if (obj1.name < obj2.name) return -1;
                    if (obj1.name > obj2.name) return 1;
                    return 0;
                });
                return [...stateUpSort];
            }
            if (action.payload === 'down') {
                let stateDownSort = state.sort(function (obj1, obj2) {
                    if (obj1.name < obj2.name) return -1;
                    if (obj1.name > obj2.name) return 1;
                    return 0;
                });
                return [...stateDownSort.reverse()];
            }
        }
        case 'check':
            return state.filter((f) => f.age > action.payload);

        default:
            return state
    }
};


export const SortUpAC = (payload: string): SortUpActionType => {
    return {type: 'sort', payload: payload}
}
export const SortDownAC = (payload: string): SortDownActionType => {
    return {type: 'sort', payload: payload}
}
export const CheckAC = (payload: number): CheckActionType => {
    return {type: 'check', payload: payload}
}