import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const likeStyle = {
      padding: 10,
      margin: 10,
      border: '2px solid red',
      borderRadius: '8px',
    };
    return (
      <div style={likeStyle}>
        4.
        {' '}
        <b>Likes</b>
        {' '}
Component is operational...
      </div>
    );
  }
}

export default Likes;
