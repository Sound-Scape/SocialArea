import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const profileStyle = {
      position: 'absolute',
      width: 40,
      height: 40,
      border: '2px solid blue',
      borderRadius: '8px',
    };
    return (
      <div style={profileStyle}>
        Pic
      </div>
    );
  }
}

export default Profile;
