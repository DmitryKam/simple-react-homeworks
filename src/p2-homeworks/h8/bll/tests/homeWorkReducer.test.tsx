import React from 'react';
import {CheckAC, homeWorkReducer, SortDownAC, SortUpAC} from '../homeWorkReducer';
import {PeopleType} from '../../HW8';

let initialState: Array<PeopleType>;

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
});
const sortUp = 'up';

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortUpAC(sortUp));

    console.log(newState);
    expect(initialState[0].name).toBe('Александр')
});
test('sort name down', () => {
    const sortDown = 'down';
    const newState = homeWorkReducer(initialState, SortDownAC(sortDown));
    console.log(newState);
    expect(initialState[0].name).toBe('Кот')

});

test('check age 18', () => {

    const checkAge = 18;
    const newState = homeWorkReducer(initialState, CheckAC(checkAge));
    expect(newState.length).toBe(4)

});
