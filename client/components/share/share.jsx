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
    return (
      <div>
        <button type="button" style={styling}>
          <img src="images/share.png" alt="share" style={imageStyling} />
          Share
        </button>
      </div>
    );
  }
}

export default Share;
