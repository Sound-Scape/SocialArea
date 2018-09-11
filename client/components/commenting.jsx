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
    return (
      <div style={commentStyle}>
        3.
        {' '}
        <b>Comment</b>
        {' '}
Component is operational...
      </div>
    );
  }
}

export default Commenting;
