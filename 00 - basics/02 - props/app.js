'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
    render() {
        let { name, age, bio } = this.props;  
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

ReactDOM.render(<Profile name="Nick" age={26} bio="I love technology!" />, app);
ReactDOM.render(<Profile name="Bob" age={12} bio="I love cookies!" />, app);