import React from "react";
import {Switch, Redirect, BrowserRouter, Route} from 'react-router-dom';
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';
import Junio from './pages/Junio';
import JuniorPlus from './pages/Jonior_Plus';
import s from './Routes.module.css'

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIO:"/junio",
    JUNIOR_PLUS:"/junior-plus",
    //add paths
}

function Routes() {
    return (

        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.JUNIO} render={() => <Junio/>}/>
            <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>


            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>

    );
}

export default Routes;
