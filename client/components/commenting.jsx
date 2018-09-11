import React from 'react';

class Commenting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const commentStyle = {
      position: 'absolute',
      left: 55,
      padding: 10,
      border: '2px solid green',
      borderRadius: '8px',
    };
    const commentInput = {
      width: '520px',
    };
    return (
      <div style={commentStyle}>
        <input type="text" placeholder="Write a comment" style={commentInput} />
      </div>
    );
  }
}

export default Commenting;
