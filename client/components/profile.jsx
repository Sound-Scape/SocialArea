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
      backgroundImage: 'linear-gradient(135deg,#846170,#70929c)',
    };
    return (
      <div style={profileStyle} />
    );
  }
}

export default Profile;
