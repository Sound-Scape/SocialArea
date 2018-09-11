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
