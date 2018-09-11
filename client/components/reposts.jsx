import React from 'react';

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const repostStyle = {
      padding: 10,
      margin: 10,
      border: '2px solid lightblue',
      borderRadius: '8px',
    };
    return (
      <div style={repostStyle}>
        5.
        {' '}
        <b>Reposts</b>
        {' '}
Component is operational...
      </div>
    );
  }
}

export default Reposts;
