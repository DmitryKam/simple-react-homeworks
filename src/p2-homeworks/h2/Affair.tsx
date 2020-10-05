import React from "react";
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
type AffairPropsType = {
    //key:any не нужно типизировать
    affair: string // need to fix any
    priority: string
    deleteAffairCallback: () => void // need to fix any
}

function Affair(props: AffairPropsType) {// need to fix
    return (
        <div className={s.itemClass}>
            <span>{props.affair} </span><span className={s.textColor}>{props.priority}</span>
            <SuperButton onClick={props.deleteAffairCallback}>X</SuperButton>
            {/*<button onClick={props.deleteAffairCallback}>X</button>*/}
        </div>
    );
}

export default Affair;
