import React from 'react';

class ModalContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const styling = {
      position: 'absolute',
      width: 420,
      height: 340,
      border: '2px solid black',
    };
    return (
      <div style={styling}>
        Inner Modal
      </div>
    );
  }
}

export default ModalContent;
