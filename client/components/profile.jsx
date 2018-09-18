import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      marginTop: 7,
      opacity: 1,
      width: 35.5,
      height: 35.5,
      backgroundImage: 'linear-gradient(135deg,#846170,#70929c)',
    };
    return (
      <div style={styling} />
    );
  }
}

export default Profile;
