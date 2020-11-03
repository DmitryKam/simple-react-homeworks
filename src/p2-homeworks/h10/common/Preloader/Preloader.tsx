import React from 'react';
import preloader from '../images/preloader.svg';

type PreloaderPropsType ={

}


function Preloader(props:PreloaderPropsType) {

    return(
        <div>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;