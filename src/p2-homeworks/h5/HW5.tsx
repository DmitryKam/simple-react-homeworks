import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from 'react-router-dom';
import s from "./HW5.module.css"

function HW5() {
    return (
        <div className={s.container}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
        <div>
            <Header />
        </div>
        <div>
            <Routes/>
        </div>
            </HashRouter>
        </div>
    );
}

export default HW5;
