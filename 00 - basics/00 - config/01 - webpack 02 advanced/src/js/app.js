'use strict';

const css = require('../scss/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>I am PICKLE RICK!!!</h1>
                <img src={require('../images/pickle-rick.jpg')} />
            </div>            
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<Title />, root);