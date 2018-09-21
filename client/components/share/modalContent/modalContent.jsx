import React from 'react';
import ModalShareTab from './Modal-share-tab';

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styling = {
      width: 505,
      height: 385,
      border: '2px solid black',
      backgroundColor: 'white',
    };
    const closeButtonStyle = {
      position: 'absolute',
      top: 2,
      right: 2,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      fontSize: 20,
    };
    return (
      <div>
        <button type="button" onClick={this.props.handleClick} style={closeButtonStyle}>X</button>
        <div style={styling}>
          Inner Modal
        </div>
        <ModalShareTab />
      </div>
    );
  }
}

export default ModalContent;
