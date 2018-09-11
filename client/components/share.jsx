import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const shareStyle = {
      position: 'absolute',
      width: 70,
      height: 25,
      bottom: 30,
      left: 190,
      border: '2px solid yellow',
      borderRadius: '8px',
    };
    return (
      <div style={shareStyle}>
        Share
      </div>
    );
  }
}

export default Share;
