import React from 'react';
require('../../scss/style.scss');
import CardNum from '../containers/card-number';

const MyApp = () => {
    return(
        <div>
            <div className="cards">
                <CardNum />
                <div className="clearFloat"></div>
            </div>
        </div>
    )
}
export default MyApp;