import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const likeStyle = {
      position: 'absolute',
      width: 70,
      height: 25,
      bottom: 30,
      left: 10,
      border: '2px solid red',
      borderRadius: '8px',
    };
    return (
      <div style={likeStyle}>
        Likes
      </div>
    );
  }
}

export default Likes;
