'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
    render() {
        let {name, age, bio} = this.props;
        return (
            <div>
                <h2>{name}</h2>
                <h4>{age}</h4>
                <p>{bio}</p>
            </div>
        );
    }
}

Profile.propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    bio: React.PropTypes.string
};

ReactDOM.render(
    <Profile name="John" age={33} />,
    document.getElementById('root')
);