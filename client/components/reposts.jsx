import React from 'react';

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const repostStyle = {
      position: 'absolute',
      width: 90,
      height: 25,
      bottom: 30,
      left: 90,
      border: '2px solid lightblue',
      borderRadius: '8px',
    };
    return (
      <div style={repostStyle}>
        Repost
      </div>
    );
  }
}

export default Reposts;
