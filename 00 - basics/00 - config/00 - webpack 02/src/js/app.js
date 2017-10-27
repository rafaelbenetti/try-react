'use strict';

const css = require('../scss/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
    render() {
        return (
            <h1>Hello, React + Webpack</h1>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<Title />, root);