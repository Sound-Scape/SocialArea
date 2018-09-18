import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  render() {
    const { clicked, ...rest } = this.props;

    if (!clicked) {
      return null;
    }

    return ReactDOM.createPortal(
      <div {...rest}>{this.props.children}</div>,
      document.getElementById('share-modal'),
    );
  }
}

export default Modal;
