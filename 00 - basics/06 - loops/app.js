'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Fruits extends React.Component {
    constructor() {
        super();
        this.state = {
            fruits: ['banana', 'orange', 'lemon']
        };
    }
    render() {
        let {fruits} = this.state;
        return (
            <ul>
                {fruits.map(fruit => {
                    return <li>{fruit}</li>
                })}
            </ul>
        )
    }
}

ReactDOM.render(
    <Fruits />,
    document.getElementById('root')
);