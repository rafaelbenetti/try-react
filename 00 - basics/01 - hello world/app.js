'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
    render() {
        return (
            <h1>Hello React!</h1>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.render(<Title />, root);