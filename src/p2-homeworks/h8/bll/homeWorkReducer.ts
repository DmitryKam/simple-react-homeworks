import {PeopleType} from '../HW8';

type SortActionType = {
    type: 'sort'
    payload: string
}

type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionType = SortActionType | CheckActionType;


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


export const SortAC = (payload: string): SortActionType => {
    return {type: 'sort', payload: payload}
}

export const CheckAC = (payload: number): CheckActionType => {
    return {type: 'check', payload: payload}
}