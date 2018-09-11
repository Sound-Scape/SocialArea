import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const shareStyle = {
      padding: 10,
      margin: 10,
      border: '2px solid yellow',
      borderRadius: '8px',
    };
    return (
      <div style={shareStyle}>
        6.
        {' '}
        <b>Share</b>
        {' '}
Component is operational...
      </div>
    );
  }
}

export default Share;
