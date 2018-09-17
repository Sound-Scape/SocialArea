import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 80,
      height: 25,
      bottom: 5,
      left: 195,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={styling}>
          <img src="images/share.png" alt="share" width="20px" height="20px" />
          Share
        </button>
      </div>
    );
  }
}

export default Share;
