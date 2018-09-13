import React from 'react';

class Commenting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      marginTop: 7,
      opacity: 1,
      left: 50,
      padding: 8.5,
      border: '1px solid grey',
      background: 'lightgrey',
    };
    const commentInput = {
      width: '520px',
    };
    return (
      <div style={styling}>
        <input type="text" placeholder="Write a comment" style={commentInput} />
      </div>
    );
  }
}

export default Commenting;
