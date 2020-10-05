import React, {useState} from 'react';
import GreetingContainer from './GreetingContainer';
import s from './Greeting.module.css';
import {v1} from 'uuid';

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => {
        let addTask: UserType = {_id: v1(), name: name};
        let newAdd = [addTask, ...users];
        // need to fix any
        setUsers(newAdd); // need to fix
    }

    return (
        <div>
            <hr/>
            <div className={s.someClass}>

            Homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
