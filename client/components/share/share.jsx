import React from 'react';
import Modal from './modal';
import ModalContent from './modalContent/modalContent';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }));
    console.log('Share clicked');
  }

  render() {
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 80,
      height: 25,
      bottom: 8,
      left: 190,
      textIndent: '15px',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
      borderRadius: '3px',
    };
    const imageStyling = {
      position: 'absolute',
      width: 20,
      height: 20,
      left: 5,
      bottom: 2,
    };
    const modalStyling = {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 20,
      width: '100%',
      height: '100%',
      background: 'rgb(237, 237, 237, 0.8)',
      opacity: 6,
    };

    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>
          <img src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/share.png" alt="share" style={imageStyling} />
          Share
        </button>
        <Modal
          style={modalStyling}
          className="modal"
          clicked={this.state.clicked}
        >
          <ModalContent handleClick={this.handleClick} />
        </Modal>
      </div>
    );
  }
}

export default Share;
