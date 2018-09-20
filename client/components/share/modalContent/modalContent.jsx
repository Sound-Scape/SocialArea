import React from 'react';
import ModalShareTab from './Modal-share-tab';

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styling = {
      position: 'absolute',
      marginTop: '7%',
      marginLeft: '34%',
      width: 420,
      height: 340,
      border: '2px solid black',
    };
    const closeButtonStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
    };
    return (
      <div style={styling}>
        <button type="button" onClick={this.props.handleClick} style={closeButtonStyle}>X</button>
        Inner Modal
        <ModalShareTab />
      </div>
    );
  }
}

export default ModalContent;
