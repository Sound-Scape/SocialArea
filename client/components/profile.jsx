import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const profileStyle = {
      padding: 10,
      margin: 10,
      border: '2px solid blue',
      borderRadius: '8px',
    };
    return (
      <div style={profileStyle}>
        2.
        {' '}
        <b>Profile Pic</b>
        {' '}
Component is operational...
      </div>
    );
  }
}

export default Profile;
