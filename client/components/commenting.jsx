import React from 'react';

class Commenting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const commentStyle = {
      position: 'absolute',
      left: 50,
      padding: 8,
      border: '1px solid green',
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
