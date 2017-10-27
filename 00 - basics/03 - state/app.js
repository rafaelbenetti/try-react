'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Rick',
            age: 70,
            bio: 'I am tiny rick!'
        };
    }
    render() {
        let { name, age, bio } = this.state;
        
        setTimeout(() => {
            this.setState({
                bio: 'I am PICKLE RICK!!!!'
            })
        }, 3000);
        
        return (                
          <div>
              <h2>{name}</h2>
              <h4>{age}</h4>
              <p>{bio}</p>
          </div>
        );
    }    
}

const app = document.getElementById('app');

ReactDOM.render(<Profile />, app);