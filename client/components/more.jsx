import React from 'react';

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const moreStyle = {
      position: 'absolute',
      width: 70,
      height: 25,
      bottom: 30,
      left: 270,
      border: '2px solid maroon',
      borderRadius: '8px',
    };
    return (
      <div style={moreStyle}>
        More
      </div>
    );
  }
}

export default More;
