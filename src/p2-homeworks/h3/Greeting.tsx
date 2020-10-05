import React from 'react';
import s from './Greeting.module.css';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''; // need to fix with (?:)

    return (
        <div>
{/*            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
            />*/}
            <SuperInputText
            value={name}
            onChange={setNameCallback}
            className={inputClass}/>
            <SuperButton onClick={addUser}>Add</SuperButton>
            {/*<button onClick={addUser}>add</button>*/}
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
    );
}

export default Greeting;
