import React, {useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
function GreetingContainer(props: GreetingContainerPropsType) {

    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);


    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const addUser = () => {
        if (name.trim() !== '') {
            props.addUserCallback(name);
            setName('')
            setError(null)
            alert('Hello ' + name + '!');
        } else {
            setError('Title is required!')
        }


    };
    const totalUsers = props.users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;


// более современный и удобный для про :)
// уровень локальной логики
/*
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(""); // need to fix
    };
    const addUser = () => {
        alert(`Hello  !`); // need to fix
    };

    const totalUsers = 0; // need to fix
*/
