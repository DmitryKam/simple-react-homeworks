import React, {useState} from 'react';
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC, ThemeInitialStateType} from './bll/themeReducer';

//const themes = ['dark', 'red', 'some'];

function HW12() {
    const themes = useSelector<AppStoreType,ThemeInitialStateType>(state => state.theme);
    const dispatch = useDispatch();


    // const [value, onChangeOption] = useState(themes.themes[0]);


    function onChangeCallback(value: string) {
        debugger;
         let action = changeThemeC(value);
         dispatch(action);
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[themes.theme]}>
            <hr/>
            <span className={s[themes.theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}

            {/*SuperSelect or SuperRadio*/}

            <SuperRadio
                options={themes.themes}
                value={themes.theme}
                onChangeOption={onChangeCallback}
                // onChange={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
