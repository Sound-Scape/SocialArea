import React from 'react';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const moreStyle = {
      padding: 10,
      margin: 10,
      border: '2px solid maroon',
      borderRadius: '8px',
    };
    return (
      <div style={moreStyle}>
        7.
        {' '}
        <b>More</b>
        {' '}
Component is operational...
      </div>
    );
  }
}

export default More;
