import React from 'react';

class Commenting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const commentStyle = {
      padding: 10,
      margin: 10,
      border: '2px solid green',
      borderRadius: '8px',
    };
    const cow = {
      width: '90%',
    };
    return (
      <div style={commentStyle}>
        <input type="text" placeholder="Write a comment" style={cow} />
      </div>
    );
  }
}

export default Commenting;
