import React from 'react';
import ModalShareTab from './modal-share-tab';

class ModalContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const styling = {
      position: 'absolute',
      marginTop: '7%',
      marginLeft: '40%',
      width: 420,
      height: 340,
      border: '2px solid black',
    };
    return (
      <div style={styling}>
        Inner Modal
        <ModalShareTab />
      </div>
    );
  }
}

export default ModalContent;
