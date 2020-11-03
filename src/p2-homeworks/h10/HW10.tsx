import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from 'react-redux';
import {InitStateType, loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import Preloader from './common/Preloader/Preloader';

function HW10() {
    const loading = useSelector<AppStoreType>(state => state.loading.loadingInReducer)


    const dispatch = useDispatch();

    const setLoading = () => {
        const action = loadingAC(true);
        dispatch(action)
        setTimeout(() => {
            const action = loadingAC(false);
            dispatch(action)
        }, 2000);
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Preloader/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
